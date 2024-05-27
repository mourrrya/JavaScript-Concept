const count = (totalBag, totalSlots) => {
  let slotList = Array(totalSlots)
    .fill()
    .map(() => 0);

  let numberOfBagInSlot = 0;
  let bagsFinished = false;

  const rf = () => {
    console.log("slotList", slotList);
    slotList = slotList.map((value) => {
      numberOfBagInSlot = numberOfBagInSlot + 1;
      const previousBags = totalBag;
      totalBag = totalBag - numberOfBagInSlot;
      if (totalBag <= 0) {
        if (!bagsFinished) {
          bagsFinished = true;
          return previousBags + value;
        }
        return value;
      }
      return numberOfBagInSlot;
    });
    if (totalBag >= 0) {
      rf();
    }
    return;
  };

  rf();
  return slotList;
};

console.log(count(100, 10));
