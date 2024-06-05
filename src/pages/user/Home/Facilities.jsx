import { useId } from "react";

function Facilities() {
    const facilitiesList = [
        {
            img: "https://cnyglock.com/wp-content/uploads/2022/12/key-card-to-activating-the-electricity-in-a-room-hotel.jpg",
            title: "24/7 electricity",
            description: "High-speed internet access available in all rooms.",
        },
        {
            img: "https://www.markas.com/smartedit/images/news/_published/55a_2.jpg",
            title: "Hygiene is maintained",
            description: "Climate control to ensure comfort during your stay.",
        },
        {
            img: "https://assets-global.website-files.com/62294553e9aeea20d15d7bc2/62bcc5ad3bf84a60e550b9cf_4.jpg",
            title: "Quality food service",
            description: "Complimentary parking for guests.",
        },
        {
            img: "https://assets1.hospitalitytech.com/styles/primary_articles_short/s3/2019-09/GettyImages-967770724_0.jpg?itok=1DhtzD4w",
            title: "Parking facility available",
            description: "Outdoor pool available for all guests.",
        },
        {
            img: "https://miro.medium.com/v2/resize:fit:870/1*lT98C7PfYtWop3z-vN7kig.jpeg",
            title: "High security for safety purpose",
            description:
                "On-site restaurant serving breakfast, lunch, and dinner.",
        },
    ];

    return (
        <div>
            <h2
                className="text-center m-0 p-4 fs-1"
                style={{ backgroundColor: "#c5c5c6" }}
            >
                Facilities We Provide
            </h2>
            <div>
                {facilitiesList.map((item) => (
                    <div
                        key={useId()}
                        className="row g-0 bg-body-secondary position-relative d-flex facility-box p-4 border-bottom border-black"
                    >
                        {/* image section */}
                        <div className="col-md-6 mb-md-0 p-md-4">
                            <img
                                src={item.img}
                                className="w-100 h-100 object-fit-cover rounded-4 "
                            />
                        </div>
                        {/* text section */}
                        <div className="col-md-6 p-4 ps-md-0">
                            <h5 className="mt-0">{item.title}</h5>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Facilities;
