1  import styles from "./Hero.module.css";
2  
3  const linkStyle = {
4    background: "rgba(20,20,20,0.6)",
5    backdropFilter: "blur(8px)",
6    padding: "14px 0",
7    borderRadius: "10px",
8    textDecoration: "none",
9    color: "white",
10   fontSize: "17px",
11   fontWeight: "600",
12   border: "1px solid rgba(255,255,255,0.12)",
13   transition: "0.3s",
14 };
15 
16 export default function Hero() {
17   return (
18     <main className={styles.homepage}>
19       <div className={styles.heroBackground} aria-hidden="true" />
20       <div className={styles.heroOverlay} aria-hidden="true" />
21       <img
22         src="/hero/the-world-blimp.webp"
23         alt="Airship silhouette with 'THE WORLD' text"
24         className={styles.srOnly}
25       />
26 
27       <div className={styles.content}>
28         <img
29           src="https://i.imgur.com/cvZxBNy.jpeg"
30           alt="888 logo"
31           className={styles.logo888}
32         />
33 
34         <div className={styles.grid}>
35           <a href="/products/beanies" style={linkStyle}>Beanies</a>
36           <a href="/products/phone-cases" style={linkStyle}>Phone Cases</a>
37           <a href="/products/hoodies" style={linkStyle}>Hoodies</a>
38           <a href="/products/jeans" style={linkStyle}>Jeans</a>
39           <a href="/products/shorts" style={linkStyle}>Shorts</a>
40           <a href="/products/hats" style={{ ...linkStyle, gridColumn: "1 / -1" }}>
41             Hats
42           </a>
43         </div>
44 
45         <div className={styles.archiveSection}>
46           <div className={styles.opalDivider} />
47 
48           <a href="/archives" className={styles.archiveButton}>
49             Explore the Eight Studios Archive →
50           </a>
51         </div>
52       </div>
53     </main>
54   );
55 }
