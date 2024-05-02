
const ProjectDetailsModal = ({ projectDetails, closeModal }) => {
    const { image, name, description } = projectDetails;

    return (
        <div>
            <input type="checkbox" id="project-details-modal" className="modal-toggle" />
            <dialog id="project-details-modal" className="modal">
                <div className="modal-box w-4/5 max-w-5xl">
                    <form method="dialog">
                        <label
                            onClick={closeModal}
                            htmlFor="project-details-modal"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        >
                            ✕
                        </label>
                    </form>

                    <div className="">
                        <h3 className="font-bold text-lg">{name}</h3>
                        <img src={image} alt="" />
                        <p>{description}</p>
                    </div>

                </div>
            </dialog>
        </div>
    );
};

export default ProjectDetailsModal;