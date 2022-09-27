import AboutDetail from "../components/aboutDetail/AboutDetail";
import AboutSidebar from "../components/aboutSidebar/AboutSidebar";

const AboutApp = () => {
    return(
        <>
            <AboutSidebar />
            <AboutDetail 
                title={'About the App'} 
                detail={
                    'In this app, you can add, delete, submit and edit items. ' + 
                    'To edit items, simply double click on it, once you are done, press the enter key to resubmit ' +
                    'This app will persist your data in the browser local storage. So wether you reload, ' +
                    'closer your app or reopened it, you will still have access to your todos item '
                    }
            />
        </>
        
    );
}

export default AboutApp;