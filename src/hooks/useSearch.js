import { useState, useMemo } from "react";

export const useSearch = (data, keys) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Função para acessar valores aninhados
  const getValueByPath = (object, path) => {
    return path.split(".").reduce((o, p) => (o ? o[p] : null), object);
  };

  const filteredData = useMemo(() => {
    if (!searchTerm) return data;

    return data.filter((item) =>
      keys.some((key) => {
        const value = getValueByPath(item, key);
        if (value === null || value === undefined) return false;
        return value
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      })
    );
  }, [data, keys, searchTerm]);

  return { filteredData, searchTerm, setSearchTerm };
};
