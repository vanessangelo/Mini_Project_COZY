import NavBarUser from "../components/users/NavBarUser";
import AsideContentUser from "../components/users/AsideContentUser";
import WriteContentUser from "../components/users/WriteContentUser";

export default function WriteUser () {
    return (
        <>
        <div className="w-screen flex content-center gap-2">
            <div className="flex-2 sticky top-0 h-60 w-[18rem]">
                <NavBarUser />
            </div>
            <div className="flex-5 w-[50rem]">
                <WriteContentUser/>
            </div>
            <div className="flex-2 justify-center">
                <AsideContentUser/>
            </div>
        </div>
        </>
    )
}