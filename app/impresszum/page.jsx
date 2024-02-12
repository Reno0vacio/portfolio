import React from "react";

const Impresszum = () => {
    return (
        <section className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center text-3xl font-bold">
                    Impresszum
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="mb-4 text-2xl font-semibold">Adatok</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <span className="font-bold mr-4">Név:</span>
                                Illés Ákos adószámos magánszemély
                            </li>
                            <li className="mb-2">
                                <span className="font-bold mr-4">Székhely:</span>
                                9012 Győr, Galgóczi Erzsébet utca 20-22 E/4
                            </li>
                            <li className="mb-2">
                                <span className="font-bold mr-4">Adószám:</span>
                                41924703-1-28
                            </li>
                            <li className="mb-2">
                                <span className="font-bold mr-4">E-mail:</span>
                                <a href="mailto:illes.akos@illesinnovate">
                                    illes.akos@illesinnovate
                                </a>
                            </li>
                            <li className="mb-2">
                                <span className="font-bold mr-4">Telefonszám:</span>
                                +36 30 648 7399
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-2xl font-semibold">Tárhelyszolgáltató</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <span className="font-bold mr-4">Cégnév:</span>
                                Tárhely.Eu Szolgáltató Kft.
                            </li>
                            <li className="mb-2">
                                <span className="font-bold mr-4">Cím:</span>
                                1097 Budapest, Könyves Kálmán körút 12-14.
                            </li>
                            <li className="mb-2">
                                <span className="font-bold mr-4">E-mail:</span>
                                <a href="mailto:support@tarhely.eu">support@tarhely.eu</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="mb-4 text-2xl font-semibold">Jogi nyilatkozat</h3>
                    <p>
                        A weboldal tartalma szerzői jogvédelem alatt áll. A weboldal
                        felhasználója a tartalmat kizárólag magáncélra használhatja fel. A
                        tartalom bármilyen formában történő további felhasználása
                        (másolása, terjesztése, átdolgozása stb.) kizárólag a szerző
                        írásos engedélyével lehetséges.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Impresszum;
