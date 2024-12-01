import { useTranslation } from "react-i18next";
import { CustomMenuList, MenuList } from "../../Enums/Menu";
import images from '../../assets'
import './style.scss'
import { useState } from "react";

const Navbar = () => {
    const {t} = useTranslation()
    const [selectMenu, setSelectMenu] = useState('')

    return <navbar>
        <div className="main-navbar">
            {MenuList?.map((item, index) => {
                return <>
                    <div 
                        key={index}
                        onClick={()=> {
                            if(item?.text === selectMenu){
                                setSelectMenu('')
                                return
                            }
                            setSelectMenu(item?.text)
                        }}
                        className={`
                            ${item?.text === selectMenu ? 'active' : 'mb-2'}
                            d-flex navLink justify-content-between align-items-center
                        `}
                    >
                        <p className="mb-0">
                            <span></span>
                            {t(item?.text)}
                        </p>
                        {!!item?.content?.length && <img src={images.arrowBlack} alt="arrow" width={15} height={15} />}
                    </div>
                    {(!!item?.content?.length && item?.text === selectMenu) && <div className="content">
                        {item?.content?.map((cont, ind) => {
                            return <p className="mb-2" key={ind}>
                                {t(cont?.text)}
                            </p>
                        })}
                    </div>}
                </>
            })}
        </div>
        <div className="custom-navbar">
            {CustomMenuList?.map((item, index) => {
                return <>
                    <div 
                        key={index}
                        onClick={()=> {
                            if(item?.text === selectMenu){
                                setSelectMenu('')
                                return
                            }
                            setSelectMenu(item?.text)
                        }}
                        className={`
                            ${item?.text === selectMenu ? 'active' : 'mb-2'}
                            d-flex navLink justify-content-between align-items-center
                        `}
                    >
                        <p className="mb-0">
                            <span></span>
                            {t(item?.text)}
                        </p>
                        {!!item?.content?.length && <img src={images.arrowWhite} alt="arrow" width={15} height={15} />}
                    </div>
                    {(!!item?.content?.length && item?.text === selectMenu) && <div className="content">
                        {item?.content?.map((cont, ind) => {
                            return <p className="mb-2" key={ind}>
                                {t(cont?.text)}
                            </p>
                        })}
                    </div>}
                </>
            })}
        </div>

        <div className='rates'>
            <img src={images.rates} alt='rates' />
            <p className="web-visitor">{t("Website visitor statistics")}</p>
            <p className="visitors">
                {/* 4,590 */}
                {toCurrency(4590)}
                <span className="fw-bold">{t("Visitor")}</span>
            </p>

            <div className="direct">
                <p>
                    <span></span>
                    {t("Direct")}
                </p>

                <span>
                    15%
                    <img src={images.arrowRed} width={18} alt='direct' />
                </span>
            </div>
            <div className="org-search">
                <p>
                    <span></span>
                    {t("Organic Search")}
                </p>

                <span>
                    85%
                    <img src={images.arrowGreen} width={18} alt='Organic' />
                </span>
            </div>
            <button className="show-visitors">
                {t("View visitor report")}
            </button>
        </div>
    </navbar>
}
const toCurrency = (number) => {
    const formatter = new Intl.NumberFormat("en-US");
      return formatter.format(number);
}
export default Navbar;