const countMark = {
  oneBillion: 1000000000,
  oneMillion: 1000000,
  oneThousand: 1000,
}

export const convertToHumanFriendlyCount = (count: number): string => {
  if(count >= countMark.oneBillion) {
    return `${Math.floor(count / countMark.oneBillion)}B`;
  } else if(count >= countMark.oneMillion) {
    return `${Math.floor(count / countMark.oneMillion)}M`;
  } else if (count >= countMark.oneThousand) {
    return `${Math.floor(count / countMark.oneThousand)}K`;
  }

  return `${count}`;
}