import AboutDetail from "../components/aboutDetail/AboutDetail";
import AboutSidebar from "../components/aboutSidebar/AboutSidebar";

const AboutAuthor = () => {
    return(
        <>
            <AboutSidebar />
            <AboutDetail 
                    title={'About the Author'} 
                    detail={'This app was developed by someone, a self-taught web developer and techincal writer '}
                />
        </>
    );
}

export default AboutAuthor;