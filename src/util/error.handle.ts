import { Response } from "express";

interface e { 
    res: Response; 
    error: string; 
    errorRaw?: any; 
    stat?: number; 
}

const handleHttp = ({ res, error, errorRaw, stat = 500 }: e) => {
    console.log(errorRaw);
    res.status(stat);
    res.send({ error }); 
}

export { handleHttp };