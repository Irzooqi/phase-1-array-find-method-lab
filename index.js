function superbowlWin(record) {
    const winningYearObject = record.find(game => game.result === "W");
    
    if (winningYearObject) {
      return winningYearObject.year;
    } else {
      return undefined;
    }
  }
  