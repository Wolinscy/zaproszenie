export default function Home() {
  return (
    <main className="max-w-480 m-auto min-w-97.5">
      
      <section className="top-bunner">
        <div className="w-full relative">
          <img src="/photos/kwiaty.jpeg" alt="Zdjęcie wiosennych kwiatów" className="w-full max-h-175" />
          <div className="absolute top-17/48 left-1/8 w-6/8 2xl:top-19/48 2xl:left-1/4 2xl:w-1/2">
            <img src="/photos/lorena-krystian.svg" alt="Lorena i Krystian" className="w-full" style={{ paddingLeft: '10%' }} />
          </div>
        </div>
      </section>

      <section className="invitation-content mt-10 md:mt-12 lg:mt-14 xl:mt-16 2xl:mt-20">
        <div className="w-full">
          <div className="w-1/8 min-w-24 mx-auto">
            <img src="/photos/golobki.svg" alt="Grafika z dwoma gołąbkami z obrączkami"/>
          </div>

          <div className="text-center font-semibold text-lg lg:text-2xl xl:text-3xl mt-6 md:mt-8 lg:mt-10 xl:mt-12 2xl:mt-14">
            <p>SERDZECZNIE ZAPRASZAMY</p>
            <p>NA NASZ ŚLUB I WESELE</p>
          </div>


          <div className="text-center px-18 md:text-lg xl:text-xl mt-12 lg:mt-16 2xl:mt-20">
            <div className="hidden md:block">
              <p>CEREMONIA ZAŚLUBIN ODBĘDZIE SIĘ W DNIU <span className="text-xl xl:text-2xl">02.05.2026</span></p>
              <p>O GODZINIE <span className="text-xl xl:text-2xl">12:30</span> W PAŁACU ŚLUBÓW</p>
              <p className="text-xs lg:text-base mt-2"><span className="material-icons" style={{ fontSize: '1rem', position: 'relative', top: '2px' }}>location_on</span> PLAC ZAMKOWY 6, 00-281 WARSZAWA</p>
            </div>

            <div className="md:hidden">
              <p>CEREMONIA ZAŚLUBIN ODBĘDZIE SIĘ</p>
              <p>W DNIU <span className="text-xl xl:text-2xl">02.05.2026</span></p>
              <p>O GODZINIE <span className="text-xl xl:text-2xl">12:30</span> W PAŁACU ŚLUBÓW</p>
              <p className="text-xs lg:text-base mt-2"><span className="material-icons" style={{ fontSize: '1rem', position: 'relative', top: '2px' }}>location_on</span> PLAC ZAMKOWY 6, 00-281 WARSZAWA</p>
            </div>
          </div>

          <div className="text-center px-18 md:text-lg xl:text-xl mt-12 lg:mt-16 2xl:mt-20">
            <div className="hidden md:block">
              <p>NASTĘPNIE ZAPRASZAMY NA WESELE</p>
              <p>W PAŁACU KRZYKOSY</p>
              <p className="text-xs lg:text-base mt-2"><span className="material-icons" style={{ fontSize: '1rem', position: 'relative', top: '2px' }}>location_on</span> KRZYKOSY 48, 09-454 KRZYKOSY</p>
            </div>

            <div className="md:hidden">
              <p>NASTĘPNIE ZAPRASZAMY</p>
              <p>NA WESELE</p>
              <p>W PAŁACU KRZYKOSY</p>
              <p className="text-xs lg:text-base mt-2"><span className="material-icons" style={{ fontSize: '1rem', position: 'relative', top: '2px' }}>location_on</span> KRZYKOSY 48, 09-454 KRZYKOSY</p>
            </div>
          </div>

          <div className="text-center px-18 md:text-lg xl:text-xl mt-6 lg:mt-10 2xl:mt-14">
            <div className="hidden md:block">
              <p>NA MALOWNICZY TEREN PAŁACU ZAPRASZAMY OD GODZINY <span className="text-xl xl:text-2xl">15:30</span>,</p>
              <p>CZĘŚĆ OFICJALNA ROZPOCZNIE SIĘ O <span className="text-xl xl:text-2xl">16:00</span></p>
            </div>

            <div className="md:hidden">              
              <p>NA MALOWNICZY TEREN PAŁACU</p>
              <p>ZAPRASZAMY OD GODZINY <span className="text-xl xl:text-2xl">15:30</span>,</p>
              <p>CZĘŚĆ OFICJALNA</p>
              <p>ROZPOCZNIE SIĘ O <span className="text-xl xl:text-2xl">16:00</span></p>
            </div>
          </div>

          <div className="text-center px-18 md:text-lg xl:text-xl mt-6 lg:mt-10 2xl:mt-14">
            <div className="hidden md:block">
              <p>NA MIEJSCU BĘDZIE ZAPEWNIONY BUFET, ALKOHOL ORAZ OGNISKO.</p>
              <p>JEMY, PIJEMY I TAŃCZYMY DO RANA!</p>
            </div>

            <div className="md:hidden">
              <p>NA MIEJSCU BĘDZIE ZAPEWNIONY</p>
              <p> BUFET, ALKOHOL ORAZ OGNISKO.</p>
              <p>JEMY, PIJEMY I TAŃCZYMY DO RANA!</p>
            </div>
          </div>

          <div className="w-1/12 min-w-18 mx-auto mt-6 md:mt-8 lg:mt-10 xl:mt-12 2xl:mt-14">
            <img src="/photos/wstega2.svg" alt="Wstęga ozdobna"/>
          </div>

          <div className="w-3/4 mx-auto">
            <img src="/photos/dresscode.svg" alt="Grafika opisująca dresscode, oraz trzy zdjęcia pary młodej z budki"/>
          </div>

          <div className="w-1/8 min-w-24 mx-auto mt-6 md:mt-8 lg:mt-10 xl:mt-12 2xl:mt-14">
            <img src="/photos/wstega1.svg" alt="Wstęga ozdobna"/>
          </div>

          <div className="w-full relative mt-6 md:mt-8 lg:mt-10 xl:mt-12 2xl:mt-14">
            <img src="/photos/palac.png" alt="Zdjęcie pałacu w Krzykosach" className="w-full"/>

            <img src="/photos/zyrandol.svg" 
                 alt="Grafika żyrandolu bankietowego" 
                 className="absolute top-10 w-1/10 left-9/20"/>

            <img src="/photos/widzimy-sie.svg" 
                 alt="Grafika żyrandolu bankietowego" 
                 className="absolute bottom-10 w-3/5 left-1/5"/>
          </div>
        </div>
      </section>
    </main>
  );
}