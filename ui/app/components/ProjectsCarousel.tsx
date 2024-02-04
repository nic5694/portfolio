
export default function ProjectCarousel(){
    type ResponsiveType = {
        breakpoint: { max: number; min: number };
        items: number;
    };

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }};
    // Function to fetch and extract the first image from the README.md file
    async function getFirstImageFromGitHubRepo() {
        const url = "https://github.com/nic5694/ChatRoom/blob/main/README.md";

        try {
            // Step 1: Fetch the content of README.md
            const response = await fetch(url);
            const data = await response.json();
            const contentBase64 = data.content;

            // Step 2: Decode the base64-encoded content
            const decodedContent = atob(contentBase64);

            // Step 3: Parse the decoded content to identify and extract image URLs
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(decodedContent, 'text/html');
            const imageElements = htmlDoc.getElementsByTagName('img');
            const imageUrls = Array.from(imageElements).map(img => img.src);

            // Step 4: Display or use the first image URL
            if (imageUrls.length > 0) {
                const firstImageUrl = imageUrls[0];
                console.log("First Image URL:", firstImageUrl);
                return firstImageUrl;
            } else {
                console.log("No images found in the README.md file.");
            }
        } catch (error) {
            console.error("Error fetching or processing data:", error);
        }
    }
    var item1: JSX.Element =<div>
            {/*@ts-ignore*/}
        <img src={getFirstImageFromGitHubRepo()} alt="ChatRoom" />
        </div>
    var item2: JSX.Element = <div><img src="../../images/downarrow.svg" alt="Project 2"/></div>
    var item3: JSX.Element = <div><img src="../../images/landing.jpg.svg" alt="Project 3"/></div>
    var items = [item2, item3,item1];
// Call the function to get the first image
    return (
        <>
            </>

    //
    //     {/*{items}*/}
    //     <div>
    //     {/*@ts-ignore*/}
    //     <img src={getFirstImageFromGitHubRepo()} alt="ChatRoom" />
    // </div>
    // <div>
    // <img src="https://via.placeholder.com/300" alt="Project 2" />
    // </div>
    // <div>
    // <img src="https://via.placeholder.com/300" alt="Project 3" />
    // </div>
    // <div>
    // <img src="https://via.placeholder.com/300" alt="Project 4" />
    // </div>
    // <div>
    // <img src="https://via.placeholder.com/300" alt="Project 5" />
    // </div>
    // <div>
    // <img src="https://via.placeholder.com/300" alt="Project 6" />
    //     </div>

)
}