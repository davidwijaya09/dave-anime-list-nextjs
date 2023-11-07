const Pagination = ({ page, lastPage, setPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        if (page < lastPage) {
            setPage((nextState) => nextState + 1)
            scrollTop()
        }
    }
    const handlePrevPage = () => {
        if (page > 1) {
            setPage((prevState) => prevState - 1)
            scrollTop()
        }
    }

    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-secondary text-2xl">
            <button onClick={handlePrevPage} className="transaction-all hover:text-color-accent">Prev</button>

            <p>{page} of {lastPage}</p>

            <button onClick={handleNextPage} className="transaction-all hover:text-color-accent">Next</button>
        </div>
    )
}

export default Pagination