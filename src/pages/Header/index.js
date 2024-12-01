import { Col, Dropdown, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import images from "../../assets"
import './style.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setLang } from '../../store/actions/Actions';

function Header() {
    const {t, i18n} = useTranslation();
    const dispatch = useDispatch();
    const lang = useSelector((state) => state.auth.lang);

    return (
        <header className='custom-header'>
            <Row className='w-100 gutter'>
                <Col md={3}></Col>
                <Col md={6}>
                    <div className='search-input'>
                        <input 
                            type='text'
                            placeholder={t('Search')}
                            name='search'
                            width='35'
                            height='35'
                        />
                        <img src={images?.search} alt='search' />
                    </div>
                </Col>
                <Col md={3} className='d-flex align-items-end justify-content-end header-buttons'>
                    <div className='d-flex flex-direction-row justify-content-end' style={{
                        gap: '12px',
                        marginBottom: '6px'
                    }}>
                        <button type='button'
                            onClick={()=> {
                                let val = lang === 'en' ? 'ar' : 'en'
                                dispatch(setLang(val))
                                i18n.changeLanguage(val);
                            }}
                        >
                            <img src={images.language} alt='language' />
                        </button>
                        <button type='button'>
                            <img src={images.sun} alt='dark' />
                        </button>
                        <button type='button'>
                            <img src={images.star} alt='star' />
                        </button>
                        <button type='button'>
                            <img src={images.notification} alt='notification' />
                        </button>
                        <Dropdown>
                            <Dropdown.Toggle className='p-0' style={{
                                background: 'none'
                            }} id="dropdown-basic">
                                <img src={images.avatar} alt='avatar' />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Profile</Dropdown.Item>
                                <Dropdown.Item href="#">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        {/* <butto type='button'>
                            <img src={images.avatar} alt='avatar' />
                        </butto> */}
                    </div>
                </Col>
            </Row>
        </header>
    );
}

export default Header;