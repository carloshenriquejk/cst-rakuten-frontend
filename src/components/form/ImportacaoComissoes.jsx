import { Button } from "@chakra-ui/react";

const ImportacaoComissoes = () => {
  return (
    <div>
      <div>
        <label>
          Selecione a Planilha de <i>Payment Control</i>:
        </label>

        <div
          style={{
            display: "block",
            margin: "50px 0",
          }}
        >
          <input type="file" />
        </div>
      </div>
      <Button colorScheme="brand">Enviar</Button>
    </div>
  );
};

export default ImportacaoComissoes;