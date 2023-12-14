import { useEffect } from "react";
import { useState } from "react";
import Link from "../src/components/Link";

export const getStaticProps = async () => {
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
  const faq = await fetch(FAQ_API_URL)
    .then((serverResponse) => {
      return serverResponse.json();
    })
    .then((response) => {
      return response;
    });

  return {
    props: { faq },
  };
};

const FAQPage = ({ faq }) => {
  // const [faq, setFaq] = useState([]);
  // useEffect(() => {
  // }, []);
  console.log(faq);
  return (
    <div>
      <h1>Alura Cases - Página de Perguntas FAQ</h1>
      <Link href={"/"}>Ir para o Home</Link>
      <ul>
        {faq.map(({ answer, question }) => (
          <li key={question}>
            <h2>{question}</h2>
            <p>{answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQPage;
