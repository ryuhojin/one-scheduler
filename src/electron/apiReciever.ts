/*****************************************************************************************
 * file - apiReciever.ts
 * description - api통신을 수신하기 위한 리시버
 * ---------------------------------------------------------------------------------------
 * (수정자(이름) / 날짜 / 내용)
 * 류호진 / 2024.03.18 / 최초작성
 *****************************************************************************************/

import { createServer } from 'http';

const apiReciever = createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Content-Type', 'application/json');

    if (req.url == '/api/recieveToken') {
        res.end(JSON.stringify({ body: 'good' }));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: '404 Not Found' }))
    }
})

export default apiReciever;