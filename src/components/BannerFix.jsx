import './style/Banners.scss'

function BannerFix() {
    return(
        <div className="banner-logo-horizontal">
            <img src='./src/assets/logo_react.svg' alt='React'/>
            <img src='./src/assets/logo_js.svg' alt='JavaScript'/>
            <img src='./src/assets/logo_redux.svg' alt='Redux'/>
            <img src='./src/assets/logo_sass.svg' alt='Sass'/>
            <img src='./src/assets/logo_figma.svg' alt='Figma'/>
            <img src='./src/assets/logo_notion.svg' alt='Notion'/>
        </div>
    )
}

export default BannerFix;