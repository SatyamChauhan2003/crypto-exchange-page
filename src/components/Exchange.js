import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Container, Heading, HStack, Image, Text, Box } from "@chakra-ui/react";
import Pagination from "./Pagination";

let PageSize = 10;

const Exchange = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  const currentTableData = exchanges.slice(firstPageIndex, lastPageIndex);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);

        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <p>loading</p>
      ) : (
        <>
          <Box>
            {currentTableData.map((i) => (
              <ExchangeCard
                key={i.id}
                rank={i.trust_score_rank}
                name={i.name}
                img={i.image}
                url={i.url}
              />
            ))}
          </Box>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={exchanges.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      )}
    </Container>
  );
};

const ExchangeCard = ({ name, img, rank, url }) => (
  <div>
    <a href={url} target={"blank"}>
      <HStack w={"100"} p={"3"} style={{ borderBottom: "1px solid gray" }}>
        <Heading size={"md"} noOfLines={1}>
          {rank}
        </Heading>
        <Image src={img} w={"6"}  alt={"Exchange"} />

        <Text noOfLines={1}>{name}</Text>
      </HStack>
    </a>
  </div>
);

export default Exchange;
