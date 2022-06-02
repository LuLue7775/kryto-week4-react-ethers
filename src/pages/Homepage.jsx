import Layout from "../components/Layout";

const Homepage = () => {
  return (
    <Layout>
      <h1>KryptoCamp 實戰營 第四週作業</h1>

      <div className="my-4">
        <p>
          <span className="mr-2">課程講義連結:</span>
          <a href="https://hackmd.io/@SVMGKOLoRDqczI3S4lKC9Q/Bk0Wckf_q">
            https://hackmd.io/@SVMGKOLoRDqczI3S4lKC9Q/Bk0Wckf_q
          </a>
        </p>

        <p>
          <span className="mr-2">作業說明連結:</span>
          <a href="https://hackmd.io/@SVMGKOLoRDqczI3S4lKC9Q/ryvuaWG_q">
            https://hackmd.io/@SVMGKOLoRDqczI3S4lKC9Q/ryvuaWG_q
          </a>
        </p>
      </div>
    </Layout>
  );
};

export default Homepage;
