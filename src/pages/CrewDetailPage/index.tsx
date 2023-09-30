import React from "react";
import { useParams } from "react-router-dom";

export default function CrewDetailPage() {
  const { crewId } = useParams();
  return <div>{crewId}의 크루 페이지입니다~~ ^^</div>;
}
