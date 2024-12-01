import { useState } from 'react';
import { useTranslation } from 'react-i18next'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Card, CardBody, Col, Row } from 'react-bootstrap'
import {AvField, AvForm} from "availity-reactstrap-validation";
import Select from 'react-select';
import { tagsOptions } from '../../Enums/Menu';
import images from '../../assets'
import './style.scss'

const Product = () => {
    const [formData, setFormData] = useState({
        page_name: '',
        product_name: "",
        product_code: "",
        opening_quantity: "",
        minimum: "",
        category: ""
    })
    const languageOptions = [
        {label: 'عربي', value: 'ar'},
        {label: 'English', value: 'en'},
    ]
    const categoryOptions = [
        {label: 'Category 1', value: 1},
        {label: 'Category 2', value: 2},
        {label: 'Category 3', value: 3},
    ]
    const [isActive, setIsActive] = useState(true);
    const [isArabic, setIsArabic] = useState(true);
    const [available, setAvailable] = useState(true);
    const [specificationAvailable, setSpecificationAvailable] = useState(true);
    const [percentage, setPercentage] = useState(true)
    const {t} = useTranslation()
    const [imagesDiv, setImagesDiv] = useState([images.imageMissing, images.imageMissing, images.imageMissing])

    const inputHandler = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const toggleSwitch = () => {};

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return <AvForm onValidSubmit={onSubmit} className='product'>
        <div className='d-flex sec-head'>
            <p className='sec-title'>{t("Add New Product")}</p>
            <div class="toggle-button-cover">
                <div id="button-1" class="button r">
                <input class="checkbox" type="checkbox" checked={!isActive} onClick={()=> setIsActive(prev=> !prev)} />
                <div class="knobs"></div>
                <div class="layer"></div>
                </div>
            </div>
        </div>

        <Row>
            <Col md={6} className='main-data-section'>
                <Card className='main-data br-0'>
                    <CardBody>
                        <div className='d-flex justify-content-between' style={{ width: '83%'}}>
                            <p className='text-primary title'>{t("Main Product Data")}</p>
                            <div class="toggle-button-cover">
                                <div id="button-2" class="button r">
                                <input class="checkbox" type="checkbox" checked={!isArabic} onClick={()=> setIsArabic(prev=> !prev)}/>
                                <div class="knobs"></div>
                                <div class="layer"></div>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex' style={{gap: '12px'}}>
                            <img src={images?.category} alt='category' width='25' height='25' className='mt-2' />
                            <Select
                                value={formData?.category}
                                onChange={()=> {}}
                                placeholder={t("Select")}
                                options={categoryOptions}
                            />
                            <label className='label-text fs-10' style={{marginTop: '10px'}}>+{t("Add new category")}</label>
                        </div>
                        <div className='d-flex filed-input' style={{gap: '12px'}}>
                            <img src={images?.write} alt='write' width='25' height='25' className='mt-2' />
                            <AvField
                                name ='product_name'
                                type='text'
                                className='h-40 w-100'
                                value={formData?.product_name}
                                validate={{
                                    required: {
                                        value:true,
                                        errorMessage: t("field required")
                                    },
                                }}
                                placeholder={t("Product Name")}
                                onChange={(e)=> inputHandler(e)}
                            />
                        </div>
                        <div className='d-flex filed-input' style={{gap: '12px'}}>
                            <img src={images?.write} alt='write' width='25' height='25' className='mt-2' />
                            <AvField
                                name ='product_code'
                                type='text'
                                className='h-40 w-100'
                                value={formData?.product_code}
                                validate={{
                                    required: {
                                        value:true,
                                        errorMessage: t("field required")
                                    },
                                }}
                                placeholder={t("Product Code SKU")}
                                onChange={(e)=> inputHandler(e)}
                            />
                        </div>
                        <div className='d-flex filed-input' style={{gap: '12px'}}>
                            <img src={images?.barcode} alt='barcode' width='25' height='25' className='mt-2' />
                            <AvField
                                name ='barcode'
                                type='text'
                                className='h-40 w-100'
                                value={formData?.barcode}
                                validate={{
                                    required: {
                                        value:true,
                                        errorMessage: t("field required")
                                    },
                                }}
                                placeholder={t("Product Barcode")}
                                onChange={(e)=> inputHandler(e)}
                            />
                        </div>
                        <div className='d-flex filed-textarea' style={{gap: '12px'}}>
                            <img src={images?.description} alt='description' width='25' height='25' className='mt-2' />
                            <textarea
                                name ='short_description'
                                value={formData?.short_description}
                                validate={{
                                    required: {
                                        value:true,
                                        errorMessage: t("field required")
                                    },
                                }}
                                placeholder={t("Brief Description")}
                                onChange={(e)=> inputHandler(e)}
                            />
                        </div>
                        <div className='d-flex filed-textarea' style={{gap: '12px'}}>
                            <img src={images?.description} alt='description' width='25' height='25' className='mt-2' />
                            <textarea
                                name ='long_description'
                                value={formData?.long_description}
                                validate={{
                                    required: {
                                        value:true,
                                        errorMessage: t("field required")
                                    },
                                }}
                                placeholder={t("Full Description")}
                                onChange={(e)=> inputHandler(e)}
                            />
                        </div>
                        <div className='d-flex' style={{gap: '6px'}}>
                            <img src={images?.language} alt='language' width='25' height='25' className='mt-2' />
                            <Select
                                value={formData?.language}
                                onChange={()=> {}}
                                isMulti
                                placeholder={t("Display languages")}
                                options={languageOptions}
                            />
                            <label className='label-text fs-10' style={{marginTop: '10px'}}>{t("You can choose more than one language")}</label>
                        </div>
                        <p className='mb-0 fs-10 fw-bold danger-text'>
                            {t("English language information must be entered because you have selected two display languages")}
                        </p>
                    </CardBody>
                </Card>
            </Col>
            <Col md={6} className='stock-data-section'>
                <Card className='stock-data br-0'>
                    <CardBody>
                        <div className='stock-title'>
                            <p className='text-primary title mb-0'>{t("Stock data")}</p>
                            <div className='d-flex flex-column align-items-center'>
                                <label class="switch">
                                    <input type="checkbox" checked={!available} onClick={()=> setAvailable(prev=> !prev)} />
                                    <div class="slider"></div>
                                        <div class="slider-card">
                                        <div class="slider-card-face slider-card-front">        
                                        </div>
                                    </div>
                                </label>
                                <span className='fs-10 label-text fw-bold'>
                                    {available ? t("Available") : t("Not Available")}
                                </span>
                            </div>
                        </div>
                        <div className='d-flex filed-input' style={{gap: '12px', width: '75.2%'}}>
                            <img src={images?.stock} alt='stock' width='25' height='25' className='mt-2' />
                            <AvField
                                name ='opening_quantity'
                                type='number'
                                className='h-40 w-100'
                                value={formData?.opening_quantity}
                                validate={{
                                    required: {
                                        value:true,
                                        errorMessage: t("field required")
                                    },
                                }}
                                placeholder={t("Opening quantity")}
                                onChange={(e)=> inputHandler(e)}
                            />
                            <AvField
                                name ='minimum'
                                type='number'
                                className='h-40 w-100'
                                value={formData?.minimum}
                                validate={{
                                    required: {
                                        value:true,
                                        errorMessage: t("field required")
                                    },
                                }}
                                placeholder={t("Minimum")}
                                onChange={(e)=> inputHandler(e)}
                            />
                        </div>
                        <div className='stock'>
                            <p className='mb-0'>
                                52 <span>{t("Piece")}</span>
                            </p>
                            <button className='browse-stock'>{t("Browse stock")}</button>
                        </div>
                        <p className='mb-0 danger-text fs-10 fw-bold'>{t("Opening quantity cannot be modified")}</p>
                    </CardBody>
                </Card>
                <Card className='supplier-data br-0'>
                    <CardBody>
                        <div>
                            <p className='text-primary title'>{t("Supplier Data")}</p>
                        </div>
                        <div className='d-flex' style={{gap: '12px', marginBottom: '22px'}}>
                            <img src={images?.storeInventory} alt='storeInventory' width='25' height='25' className='mt-2' />
                            <Select
                                value={formData?.category}
                                onChange={()=> {}}
                                placeholder={t("select resource")}
                                options={categoryOptions}
                            />
                            <label className='label-text fs-10' style={{marginTop: '10px'}}>+{t("Add new resource")}</label>
                        </div>
                        <div className='d-flex filedInput' style={{gap: '12px'}}>
                            <img src={images?.barcode} alt='barcode' width='25' height='25' className='mt-2' />
                            <AvField
                                name ='barcode'
                                type='text'
                                className='h-40 w-100'
                                value={formData?.barcode}
                                validate={{
                                    required: {
                                        value:true,
                                        errorMessage: t("field required")
                                    },
                                }}
                                placeholder={t("Barcode")}
                                onChange={(e)=> inputHandler(e)}
                            />
                        </div>
                        <div>
                            <button className='add-more-resource fw-bold text-primary fs-12 bg-none b-0'>
                                <img src={images.addCircle} alt='addCircle' width='25' height='25' />
                                {t("add additional resource")}
                            </button>
                        </div>
                        <div className='browse-suppliers'>
                            <label>{t("View suppliers")}</label>
                            <button>
                                {t("Browse suppliers")}
                            </button>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col md={6} className='main-data-section mb-0 product-specification-definition'>
                <Card className='main-data br-0'>
                    <CardBody>
                        <div className='d-flex justify-content-between' style={{
                            width: '83%'
                        }}>
                            <p className='text-primary title'>{t("Product Specification Definition")}</p>
                            <div className='d-flex flex-column align-items-center'>
                                <label class="switch">
                                    <input type="checkbox" checked={!specificationAvailable} onClick={()=> setSpecificationAvailable(prev=> !prev)} />
                                    <div class="slider"></div>
                                        <div class="slider-card">
                                        <div class="slider-card-face slider-card-front">        
                                        </div>
                                    </div>
                                </label>
                                <span className='fs-10 label-text fw-bold'>
                                    {specificationAvailable ? t("Available") : t("Not Available")}
                                </span>
                            </div>
                        </div>
                        <div className='d-flex' style={{gap: '12px'}}>
                            <img src={images?.category} alt='category' width='25' height='25' className='mt-2' />
                            <Select
                                value={formData?.category}
                                onChange={()=> {}}
                                placeholder={t("Select Specification")}
                                options={categoryOptions}
                            />
                            <label className='label-text fs-10' style={{marginTop: '10px'}}>+{t("Add new category")}</label>
                        </div>
                        <div className='d-flex' style={{gap: '7px', marginBottom: '23px'}}>
                            <img src={images?.productRequired} alt='stock' width='30' height='30' className='mt-2' />
                            <Autocomplete
                                multiple
                                id="values"
                                options={tagsOptions}
                                popupIcon={<KeyboardArrowDownIcon />}
                                getOptionLabel={(option) => option.title}
                                defaultValue={[tagsOptions[0]]}
                                renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="standard"
                                    label={t("Select Values")}
                                    placeholder={t("Select")}
                                />
                                )}
                            />
                        </div>
                        <div className='d-flex filed-input' style={{gap: '12px'}}>
                            <img src={images?.stock} alt='stock' width='25' height='25' className='mt-2' />
                            <AvField
                                name ='opening_quantity'
                                type='text'
                                className='h-40 w-100'
                                value={formData?.opening_quantity}
                                validate={{
                                    required: {
                                        value:true,
                                        errorMessage: t("field required")
                                    },
                                }}
                                placeholder={t("Opening quantity")}
                                onChange={(e)=> inputHandler(e)}
                            />
                        </div>
                        <p className='mb-0 fs-10 fw-bold danger-text'>
                            {t("English language information must be entered because you have selected two display languages")}
                        </p>
                    </CardBody>
                </Card>
            </Col>
            <Col md={6} className='upload-image mb-0'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div style={{width: 'fit-content'}}>
                            <label class="custum-file-upload" for="file">
                                <div class="icon">
                                    <img src={images.upload} alt='upload' />
                                </div>
                                <div class="text">
                                    <span className='fw-bold label-text fs-12'>{t("Upload image")}</span>
                                </div>
                                <input type="file" id="file" />
                            </label>

                            <label className='text-primary fs-10 fw-bold'>
                                {t("Image uploaded successfully")}
                            </label>
                        </div>
                    </div>
                    <div className='col-md-8 text-center'>
                        <img src={images.image} alt='upload' />
                    </div>
                </div>
                <div className='missing-images'>
                    {imagesDiv?.map((item, index) => {
                        return <div className='d-flex flex-column' key={index}>
                            <img src={item} alt='missing' />
                            <button 
                                type='button' 
                                className='bg-none b-0'
                                onClick={() => {
                                    let update = imagesDiv?.filter((_,ind) => ind !== index)
                                    setImagesDiv(update)
                                }}
                            >
                                <img src={images.deleteImg} alt='deleteImg' />
                            </button>
                        </div>
                    })}
                </div>
            </Col>
        </Row>

        {/* Start Sales and Marketing Features */}
        <Card className='sales-and-marketing'>
            <CardBody>
                <Row className='gutter'>
                    <Col md={8}>
                        <div style={{marginBottom: '30px'}}>
                            <p className='text-primary title mb-0'>{t("Sales and Marketing Features")}</p>
                        </div>
                        <div className='price-tag d-flex' style={{gap: '12px'}}>
                            <img src={images?.priceTag} alt='priceTag' width='25' height='25' className='mt-2' />
                            <AvField
                                name ='price_tag'
                                type='text'
                                className='h-40 w-100 br-0'
                                value={formData?.price_tag}
                                validate={{
                                    required: {
                                        value:true,
                                        errorMessage: t("field required")
                                    },
                                }}
                                placeholder={t("selling price")}
                                onChange={(e)=> inputHandler(e)}
                            />
                            <label className='mt-2'>{t("Dinar")}</label>
                        </div>
                        <div className='discount-section'>
                            <div className='discount-icon d-flex' style={{gap: '15px'}}>
                                <img src={images?.checkBox} alt='checkBox' width='20' height='20' />
                                <label>{t("Discount")}</label>
                            </div>
                            <div className='discount'>
                                <div className='percentage'>
                                    <div className='percentage-radio-button'>
                                        <input type='radio' id="percentage" name="percentage" checked={percentage} onChange={()=> setPercentage(true)} />
                                        <label for='percentage'>
                                            {t("percentage")}
                                        </label>
                                        
                                        <input type='radio' id='fixed' name="percentage" checked={!percentage} onChange={()=> setPercentage(false)} />
                                        <label for='fixed'>
                                            {t("Fixed value")}
                                        </label>
                                    </div>
                                    <div className='percentage-value mb-0 d-flex' style={{gap: 'px'}}>
                                        <AvField
                                            name ='percentage'
                                            type='number'
                                            className='h-40 w-100 br-0'
                                            value={formData?.percentage}
                                            validate={{
                                                required: {
                                                    value:true,
                                                    errorMessage: t("field required")
                                                },
                                            }}
                                            min={0}
                                            max={percentage ? '100' : ''}
                                            style={{
                                                background: '#FCF6FE'
                                            }}
                                            placeholder={t("Discount value")}
                                            onChange={(e)=> inputHandler(e)}
                                        />
                                        {percentage && <img src={images?.percentage} alt='percentage' width='25' height='25' className='mt-2' />}
                                    </div>
                                </div>
                                <div className='show-percentage'>
                                    <div className='d-flex'>
                                        <p className='mb-0'>
                                            4 <span>{t("offer")}</span>
                                        </p>
                                        <button className='view-offers'>{t("Click here to view the offers")}</button>
                                    </div>
                                    <button className='add-new-offers'>
                                        {t("Add new offers")}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className='selected'>
                        <div className='d-flex' style={{gap: '12px', marginBottom: '23px'}}>
                            <img src={images?.tags} alt='stock' width='25' height='25' className='mt-2' />
                            <Autocomplete
                                multiple
                                id="tags"
                                options={tagsOptions}
                                popupIcon={<KeyboardArrowDownIcon />}
                                getOptionLabel={(option) => option.title}
                                defaultValue={[tagsOptions[0], tagsOptions[1]]}
                                renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="standard"
                                    label="اختيار الوسوم - Tags"
                                    placeholder="الوسم"
                                />
                                )}
                            />
                        </div>
                        <div className='d-flex' style={{gap: '8px'}}>
                            <img src={images?.productRequired} alt='stock' width='29' height='29' className='mt-2' />
                            <Autocomplete
                                multiple
                                id="similar"
                                options={tagsOptions}
                                getOptionLabel={(option) => option.title}
                                popupIcon={<KeyboardArrowDownIcon />}
                                defaultValue={[tagsOptions[3], tagsOptions[4]]}
                                renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="standard"
                                    label={t("Select similar products")}
                                    placeholder={t("product")}
                                />
                                )}
                            />
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
        {/* End Sales and Marketing Features */}
    
        {/* Start Search Engine Definitions */}
        <Card className='search-engine'>
            <CardBody>
                <div style={{marginBottom: '30px'}}>
                    <p className='text-primary title mb-0'>{t("Search Engine Definitions")}</p>
                </div>
                <Row>
                    <Col md={4}>
                        <div className='d-flex' style={{gap: '12px'}}>
                            <img src={images?.url} alt='url' width='25' height='25' className='mt-2' />
                            <AvField
                                name ='page_name'
                                type='text'
                                className='h-40 w-100'
                                value={formData?.page_name}
                                validate={{
                                    required: {
                                        value:true,
                                        errorMessage: t("field required")
                                    },
                                }}
                                placeholder={t("Page Name")}
                                onChange={(e)=> inputHandler(e)}
                            />
                        </div>
                        <div className='d-flex' style={{gap: '12px'}}>
                            <img src={images?.tags} alt='tags' width='25' height='25' className='mt-2' />
                            <AvField
                                name ='tags'
                                type='text'
                                className='h-40 w-100'
                                value={formData?.tags}
                                validate={{
                                    required: {
                                        value:true,
                                        errorMessage: t("field required")
                                    },
                                }}
                                placeholder={t("Meta Tags")}
                                onChange={(e)=> inputHandler(e)}
                            />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='d-flex' style={{gap: '12px'}}>
                            <img src={images?.search} alt='search' width='25' height='25' className='mt-2' />
                            <textarea
                                name ='keywords'
                                className='w-100'
                                value={formData?.keywords}
                                validate={{
                                    required: {
                                        value:true,
                                        errorMessage: t("field required")
                                    },
                                }}
                                placeholder={t("Keywords")}
                                onChange={(e)=> inputHandler(e)}
                            />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='d-flex' style={{gap: '12px'}}>
                            <img src={images?.description} alt='description' width='25' height='25' className='mt-2' />
                            <textarea
                                name ='description'
                                className='w-100'
                                value={formData?.description}
                                validate={{
                                    required: {
                                        value:true,
                                        errorMessage: t("field required")
                                    },
                                }}
                                placeholder={t("description")}
                                onChange={(e)=> inputHandler(e)}
                            />
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
        {/* End Search Engine Definitions */}

        {/* Start Buttons */}
        <Row className='buttons-section'>
            <Col md={6} className='d-flex justify-content-between'>
                <div className='main-buttons'>
                    <button className='save-button' type='submit'>
                        <span>
                            <img src={images?.save} alt='save' />
                            {t("Save")}
                        </span>
                    </button>
                    <button className='print-button' type='button'>
                        <span>
                            <img src={images?.print} alt='print' width='50' />
                            {t("Print")}
                        </span>
                    </button>
                    <button className='barcode-button' type='button'>
                        <span>
                            <img src={images?.barcode} alt='barcode' />
                            {t("Print Barcode")}
                        </span>
                    </button>
                </div>
                <div className='cancel-section'>
                    <button className='cancel-button' type='button'>
                        <img src={images?.x} alt='cancel' />
                    </button>
                </div>
            </Col>
            <Col md={6} className='purchase'>
                <button type='button' className='add-purchase'>
                    <img src={images.addCircle} alt='addCircle' width='30' />
                    {t("Add purchase invoices")}
                </button>
            </Col>
        </Row>
        {/* End Buttons */}
    </AvForm>
}
export default Product