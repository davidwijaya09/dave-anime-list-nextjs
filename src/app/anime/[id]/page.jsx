import { getAnimeResponse } from "@/app/libs/api-libs"

const Page = async ({ params: { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    console.log(anime);

    return (
        <>
            <div className="pt-4 px-4">
                <h3 className="text-2xl text-color-primary">ANIME ID DETAIL</h3>
            </div>
        </>
    )
}

export default Page