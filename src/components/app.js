import React from 'react';
import Search from './search';

const video1 = {
    author: { 
    channel: "https://www.youtube.com/watch?v=MfTbHITdhEI",
    name: "Eminem",
    produce: "VEVO"
},
    date: "27 november",
    content: `Eminem — Вікіпедія 
    Eminem; стилізовано як EMINƎM) – американський репер, музичний продюсер, композитор і актор. 
    У 2000-х роках у Сполучених Штатах його творів ...
    Дата народження‎: ‎17 жовтня‎ ‎1972‎ (46 років)	Місце народження‎: ‎Сент-Джозеф, Міссурі, С...
    Повне ім'я‎: ‎Маршалл Брюс Метерз III	Роки активності‎: ‎1992 — донині`
}
const video2 = {
    author: { 
    channel: "https://www.youtube.com/watch?v=XbGs_qK2PQA",
    name: "Eminem-Rap God",
    produce: "VEVO"
},
    date: "18 minutes ago",
    content: `Эминем — Википедия
    https://ru.wikipedia.org/wiki/Эминем
    Перекласти цю сторінку
    Премия «Грэмми» за лучшее рэп-/песенное совместное исполнение (2015). Премия «Грэмми» за лучший рэп-альбом (2015). премия «Оскар» за лучшую ...
    Имя при рождении‎: ‎Marshall Bruce Mathers III	Годы активности‎: ‎1988 — наст. время
    Полное имя‎: ‎Маршалл Брюс Мэтерс III	Дата рождения‎: ‎17 октября‎ ‎1972‎ (46 лет)
    `
}
const video3 = {
    author: { 
    channel: "https://www.youtube.com/watch?v=eJO5HU_7_1w",
    name: "Eminem-The Real Slim Shady",
    produce: "VEVO"
},
    date: "today",
    content: `Эминем – биография, фото, личная жизнь, новости, песни, клипы ...
    https://24smi.org/celebrity/1199-eminem.html
    Перекласти цю сторінку
     Оцінка: 4,4 - ‎32 голоси
    Эминем так влюбился в музыкальное направление, что ни о чем другом больше не мечтал. Музыкант участвовал в баттлах и завоевывал публику,`
}

const App = () => {
    return (<div>
        <h1>Video!</h1>
        <Search author = {video1.author}
        > 
        <h1>Eminem — Вікіпедія</h1>
            <a href = "https://www.youtube.com/embed/XbGs_qK2PQA">https://www.youtube.com/embed/XbGs_qK2PQA</a>
           <p>{video1.content}</p>
            <h1>Eminem — Home</h1>
            <a href = "https://www.youtube.com/embed/XbGs_qK2PQA">https://www.youtube.com/embed/XbGs_qK2PQA</a>
            <p>{video2.content}</p>
            <h1>Eminem — News</h1>
            <a href = "https://www.youtube.com/embed/XbGs_qK2PQA">https://www.youtube.com/embed/XbGs_qK2PQA</a>
            <p>{video3.content}</p>
        </Search>
    </div>


    )
}

export default App;



