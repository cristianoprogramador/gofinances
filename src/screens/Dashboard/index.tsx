import React from "react";
import { Text } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";
import {
  Container,
  Header,
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function DashBoard() {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "R$: 12.000,00",
      category: { name: "Vendas", icon: "dollar-sign" },
      date: "09/04/2022",
    },
    {
      id: "2",
      type: "negative",
      title: "Hamburgueria Pizzy",
      amount: "R$: 59,00",
      category: { name: "Alimentação", icon: "coffee" },
      date: "10/04/2022",
    },
    {
      id: "3",
      type: "negative",
      title: "Aluguel do apartamento",
      amount: "R$: 1.200,00",
      category: { name: "Casa", icon: "home" },
      date: "11/04/2022",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{ uri: "https://github.com/cristianoprogramador.png" }}
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Rodrigo</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entrada"
          amount="R$: 17.400,00"
          lastTransaction="Última entrada dia 13 de setembro"
        />
        <HighlightCard
          type="down"
          title="Saidas"
          amount="R$: 1.259,00"
          lastTransaction="Última saida dia 03 de setembro"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$: 16.141,00"
          lastTransaction="01 a 15 de setembro"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
