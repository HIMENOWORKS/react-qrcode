import axios from "axios";

type QRCodeRequest = {
    content: string
}

export const createQrcode = async (body: QRCodeRequest) => {
	const res = await axios.post("/qrcode", body);
    return res.data;
};
