import React from "react";
import { Crew } from "../../store/crew/crewType";

interface Props {
  crew: Crew;
}

export default function Content({ crew }: Props) {
  const converted_thumbnail =
    crew.thumbnail === null ? "default" : crew.thumbnail;

  return (
    <div className="content">
      <img
        className="content__thumbnail"
        src={converted_thumbnail}
        alt={crew.crewName}
      />
      <div className="content__info">
        <p className="content__info-name">{crew.crewName}</p>
        <p className="content__info-join-member">
          {crew.headcount} / {crew.capacity}
        </p>
        <div className="content__info-tags">
          {crew.tags.map((tag) => (
            <p key={tag} className="content__info-tag">
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
