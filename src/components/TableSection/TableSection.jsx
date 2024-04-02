import { useState } from "react";
import { useQuery, QueryClient, QueryClientProvider, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { API_URL } from "../../constants/constants";

import ElementsInput from "../ElementsInput/ElementsInput";
import TagsTable from "../TagsTable/TagsTable";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Message from "../Message/Message";

const TableSection = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSetRowsPerPage = (rows) => {
    setRowsPerPage(rows);
  };

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["tags"],
    queryFn: () =>
      axios.get(API_URL).then((res) => {
        return res.data;
      }),
  });

  return (
    <ContentWrapper>
      {isPending && <Message type="info" text="Ładowanie danych..." />}
      {error && <Message type="error" text={`Wystąpił błąd: ${error.message}`} />}
      {data && (
        <>
          <ElementsInput rowsPerPage={rowsPerPage} setRowsPerPage={handleSetRowsPerPage} />
          <TagsTable rowsPerPage={rowsPerPage} rows={data.items} />
        </>
      )}
    </ContentWrapper>
  );
};

export default TableSection;
