import Unlock from "./unlock";
import Achievements from "./achievement/index"
import Calender from "./calender";
import Customer from "./customer";
import CommunityUpdate from "./communityUpdate";


const Body = ()=>{
    return(
        <>
            <Unlock/>
            <Achievements/>
            <Calender/>
            <Customer/>
            <CommunityUpdate/>
        </>
    )
}

export default Body;