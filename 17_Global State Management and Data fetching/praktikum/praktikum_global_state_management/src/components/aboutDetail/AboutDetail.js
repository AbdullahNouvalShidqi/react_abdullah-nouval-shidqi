import './AboutDetail.css';

const AboutDetail = ({title, detail}) => {
    return(
        <>
            <div className="detail-container">
                <h1>{title}</h1>
                <p>{detail}</p>
            </div>
        </>
        
    );
}

export default AboutDetail;