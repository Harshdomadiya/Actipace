import {atom} from  "recoil"
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();


export const  TokenAtoms = atom({
    key:"TokenAtoms",
    default:null
})

export const TSLink = atom({
    key:"TSLink",
    default:{
        success: false,
        message: "",
        DownloadLink: "",
        expire: "",
    },
    effects_UNSTABLE: [persistAtom], 
})

export const ISLink =atom ({
    key:"ISLink",
    default:null
})

export const BDLink = atom({
    key:"BDLink",
    default:null
})

