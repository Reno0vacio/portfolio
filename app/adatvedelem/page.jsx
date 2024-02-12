import React from "react";

const Adatvedelem = () => {
    return (
        <section className="adatvedelem bg-gray-100 py-12">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center text-3xl font-bold">
                    Adatvédelmi Tájékoztató
                </h2>

                <div className="mb-8">
                    <h3 className="mb-4 text-2xl font-semibold">Bevezetés</h3>
                    <p>
                        A jelen adatvédelmi tájékoztató az IllésInnovate (a továbbiakban:
                        „Weboldal”) használatával kapcsolatos adatkezelési tevékenységekről
                        szól. A Weboldal üzemeltetője (a továbbiakban: „Adatkezelő”)
                        elkötelezett az Ön személyes adatainak védelme iránt. A jelen
                        adatvédelmi tájékoztató célja, hogy tájékoztassa Önt az Ön személyes
                        adatainak kezelésére vonatkozó legfontosabb tudnivalókról.
                    </p>
                </div>

                <div className="mb-8">
                    <h3 className="mb-4 text-2xl font-semibold">Adatkezelő:</h3>
                    <ul className="list-disc list-inside">
                        <li>
                            <span className="font-bold mr-4">Név:</span> Illés Ákos
                            (adószámos magánszemély)
                        </li> <li>
                            <span className="font-bold mr-4">Lakcím:</span> 9012 Győr, Galgóczi Erzsébet utca 20-22 E/4
                        </li>
                        <li>
                            <span className="font-bold mr-4">Adószám:</span> 41924703-1-28
                        </li>
                        <li>
                            <span className="font-bold mr-4">Elérhetőség:</span>
                            <a href="mailto:illes.akos@illesinnovate.hu">
                                illes.akos@illesinnovate.hu
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="mb-4 text-2xl font-semibold">
                        A kezelt személyes adatok köre
                    </h3>

                    <p className="ml-5 mb-5">
                        A Weboldal használata során az Adatkezelő az alábbi személyes
                        adatokat kezeli:
                    </p>

                    <h4 className="mb-4 text-xl font-semibold">
                        Az Ön által megadott adatok (Kapcsolat):
                    </h4>

                    <ul className="list-disc list-inside ml-5 mb-5">
                        <li>Név</li>
                        <li>E-mail cím</li>
                        <li>Telefonszám</li>
                        <li>További, az Ön által megadott információk (üzenetben)</li>
                    </ul>

                    <h4 className="mb-4 text-xl font-semibold">
                        A Weboldal használata során automatikusan rögzített adatok
                    </h4>

                    <ul className="list-disc list-inside ml-5 mb-5">
                        <li>IP-cím</li>
                        <li>Böngésző típusa</li>
                        <li>Operációs rendszer</li>
                        <li>A látogatás időpontja és hossza</li>
                        <li>A megtekintett oldalak</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="mb-4 text-2xl font-semibold">
                        Az adatkezelés célja és jogalapja
                    </h3>

                    <p className="ml-5 mb-5">
                        Az Adatkezelő az Ön személyes adatait az alábbi célokra kezeli:
                    </p>

                    <h4 className="mb-4 text-xl font-semibold">
                        A Weboldal üzemeltetése és a szolgáltatások nyújtása:
                    </h4>

                    <ul className="list-disc list-inside ml-5 mb-5">
                        <li>Kapcsolatfelvétel</li>
                        <li>Ügyfélszolgálat</li>
                    </ul>

                    <h4 className="mb-4 text-xl font-semibold">
                        A Weboldal használatának elemzése:
                    </h4>
                        <ul className="list-disc list-inside ml-5 mb-5">
                            <li>Statisztikai adatok gyűjtése</li>
                            <li>A Weboldal fejlesztése</li>
                            <li>A felhasználói élmény javítása</li>
                        </ul>

                        <h4 className="mb-4 text-xl font-semibold">
                            Jogszabályi kötelezettség teljesítése:
                        </h4>

                        <ul className="list-disc list-inside ml-5 mb-5">
                            <li>Hatósági megkeresések teljesítése</li>
                            <li>Adózási és számviteli kötelezettségek teljesítése</li>
                        </ul>

                        <p className="ml-5 mb-5">
                            Az adatkezelés jogalapja az Ön hozzájárulása, a szerződés teljesítése,
                            az Adatkezelő jogos érdeke, valamint jogszabályi kötelezettség teljesítése.
                        </p>

                </div>

                <div className="mb-8">
                    <h3 className="mb-4 text-2xl font-semibold">
                        Az adatkezelés időtartama
                    </h3>

                    <p>
                        Az Adatkezelő az Ön személyes adatait a fent meghatározott célok
                        eléréséhez szükséges ideig, de legfeljebb 5 évig kezeli.
                    </p>
                </div>

                <div className="mb-8">
                    <h3 className="mb-4 text-2xl font-semibold">
                        Az adatok továbbítása
                    </h3>

                    <p>
                        Az Adatkezelő az Ön személyes adatait nem továbbítja harmadik
                        személyek részére, kivéve a jogszabályi kötelezettség teljesítése,
                        az Ön hozzájárulása alapján történő továbbítás, vagy az Adatkezelő
                        adatfeldolgozói (pl. tárhelyszolgáltató) általi adatkezelés.
                    </p>
                </div>

                <div className="mb-8">
                    <h3 className="mb-4 text-2xl font-semibold">
                        Önnek joga van:
                    </h3>

                    <ul className="list-disc list-inside">
                        <li>Hozzáférni az Önre vonatkozó személyes adatokhoz</li>
                        <li>Kérni az Ön személyes adatainak helyesbítését vagy törlését.</li>
                        <li>Korlátozni az Ön személyes adatainak kezelését.</li>
                        <li>Tiltakozni az Ön személyes adatainak kezelése ellen.</li>
                        <li>Hordozható formában megkapni az Önre vonatkozó személyes adatokat.</li>
                        <li>Visszavonni a hozzájárulását az adatkezeléshez.</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="mb-4 text-2xl font-semibold">
                        Jogorvoslati lehetőségek
                    </h3>

                    <p>
                        Amennyiben Ön úgy ítéli meg, hogy az Adatkezelő az Ön személyes
                        adatait a jogszabályok megsértésével kezeli, panasszal élhet az
                        Adatkezelőnél a fenti elérhetőségeken. Panasztételre jogosult
                        továbbá a Nemzeti Adatvédelmi és Információszabadság Hatóságnál
                        (NAIH) is.
                    </p>
                </div>

                <div className="mb-8">
                    <h3 className="mb-4 text-2xl font-semibold">
                        Egyéb rendelkezések
                    </h3>

                    <p>
                        Az Adatkezelő fenntartja magának a jogot, hogy a jelen
                        adatvédelmi tájékoztatót egyoldalúan módosítsa. A módosításokról
                        az Adatkezelő a Weboldalon tájékoztatja a felhasználókat.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Adatvedelem;