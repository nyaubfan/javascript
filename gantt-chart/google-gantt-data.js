data.addRows([
        ['Research', 'Find sources', null,
         new Date(2015, 0, 1), new Date(2015, 0, 5), null,  100,  null],
        ['Write', 'Write paper', 'write',
         null, new Date(2015, 0, 9), daysToMilliseconds(3), 25, 'Research,Outline'],
        ['Cite', 'Create bibliography', 'write',
         null, new Date(2015, 0, 7), daysToMilliseconds(1), 20, 'Research'],
        ['Complete', 'Hand in paper', 'complete',
         null, new Date(2015, 0, 10), daysToMilliseconds(1), 0, 'Cite,Write'],
        ['Outline', 'Outline paper', 'write',
         null, new Date(2015, 0, 6), daysToMilliseconds(1), 100, 'Research']
      ]);