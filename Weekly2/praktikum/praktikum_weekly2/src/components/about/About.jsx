import './About.css'

const About = () => {
    return(
        <div className="about-container">
            <h1>About Us</h1>
            <img src={require("../../assets/images/about-us.jpg")} alt="Not found" height={200}/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio autem, praesentium recusandae placeat sunt dignissimos consequatur vitae illum laudantium, numquam dolorum voluptate minus impedit quos ipsa, repellat quasi dolores quisquam.</p>
        </div>
    );
};

export default About;