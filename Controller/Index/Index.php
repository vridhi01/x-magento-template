<?php

namespace Bss\HelloWorld\Controller\Index;

use Bss\HelloWorld\Block\Index\Collection;
use Magento\Framework\App\Action\Action;
use Magento\Framework\App\Action\Context;
use Magento\Framework\View\Result\PageFactory;

class Index extends Action
{
    /** @var PageFactory */
    protected $pageFactory;

    /** @var  \Magento\Catalog\Model\ResourceModel\Product\Collection */
    protected $productCollection;
    
    /** @var  \Bss\HelloWorld\Block\Index\Collection */
    protected $collection;

    public function __construct(
        Context $context,
        PageFactory $pageFactory,
        \Magento\Catalog\Model\ResourceModel\Product\CollectionFactory $collectionFactory,
        \Bss\HelloWorld\Block\Index\Collection $collection
    )
    {
        $this->pageFactory = $pageFactory;
        $this->productCollection = $collectionFactory->create();
        $this->collection = $collection;
        parent::__construct($context);
    }

    public function execute()
    {
		$result = $this->pageFactory->create();
		$collection = $this->productCollection;
		$collection->addFieldToSelect('*');
		//$categoriesId = [1,2,3];
		//$collection->addCategoriesFilter(['in' => $categoriesId]); // Filter with category id
		$collection->addAttributeToFilter('status',\Magento\Catalog\Model\Product\Attribute\Source\Status::STATUS_ENABLED); // Filter enable product
		$this->collection->setProductCollection($collection);
		return $result;
    }
}
