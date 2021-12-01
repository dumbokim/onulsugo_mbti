import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useState, useEffect } from "react";
import {useSpring, animated} from 'react-spring';
import {useRouter} from "next/router";

const Home: NextPage = () => {
  const [page, setPage] = useState(0);
  const [refresh, setRefresh] = useState(true);
  const [first, setFirst] = useState(true);
  const router = useRouter();

  useEffect(() => {
    console.log('hi');
  }, [first])

  useEffect(() => {
    setRefresh(true);
  }, [page])

  const startAni = useSpring({
    reset: refresh,
    from: {opacity:0.3,},
    to: {opacity:1, },
    config:{duration: 1000,
    },
  })

  const animation0 = useSpring({
    reset: refresh,
    from: {opacity:0.3,},
    to: {opacity:1, },
    config:{duration: 500,
    },
  })

  const animation1 = useSpring({
    reset: refresh,
    from: {x:-70},
    to: {x:0},
    config:{duration: 300},
  })

  const animation2 = useSpring({
    reset: refresh,
    from: {x:-70},
    to: {x:0},
    config:{duration: 500},
    
  })

  const animation3 = useSpring({
    reset: refresh,

    from: {x:-70},
    to: {x:0},
    config:{duration: 700},
    
  })

  const animation4 = useSpring({
    reset: refresh,
    from: {x:-70},
    to: {x:0},
    config:{duration: 900},
    
  })

  const pageClick = () => {
    page==1? setPage(2) :( page==2 ? setPage(3): (page==3? setPage(4): setPage(5)));
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>오늘수거 분리배출 테스트 결과</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.context}>
      <animated.div className={styles.main} 
        style={{...startAni}}>
          <div className={styles.question}><p className={styles.description}>
            당신의 결과는 어쩌구~~
          </p>
          </div>
          <div className={styles.answer}>
            <p>
              분리배출이 어려운 당신을 위해서!
            </p>
            <div className={styles.code}>
                <a
                href="https://repolarkorea.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{margin:'0'}}
                >
                    <div>오늘수거 이용하기</div>
                </a>
            </div>
            <div className={styles.code}
                onClick={() => {
                    router.push('/')
                }}
            >
               다시하기
            </div>
            <div className={styles.linkList}>
                <a
                href="https://www.instagram.com/today.collect/"
                target="_blank"
                rel="noopener noreferrer">
                  <Image
                        src="/instagram.png"
                        alt="OnulSugo insta"
                        width={70}
                        height={70}
                    />
                </a>
                </div>
            </div>
        </animated.div>

        <footer className={styles.footer}>
          <a
            href="https://repolarkorea.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Created by{" "}
            <span className={styles.logo}>
              <Image
                src="/onul.png"
                alt="OnulSugo Logo"
                width={130}
                height={35}
              />
            </span>
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Home;