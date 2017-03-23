var Table = Reactable.Table;

var data = [
        { Name: 'Griffin Smith', Age: 18, Position: 'Developer' },
        { Age: 23, Name: 'Lee Salminen', Position: 'Policeman' },
        {Name: 'Adam Malysz', Age: 28, Position: 'Ski jumper' },
        {Name: 'Lukasz Zieba', Age: 32, Position: 'Web Lead' },
        {Name: 'Lukasz Sadlocha', Age: 26, Position: 'Junior Dev' },
    ];


ReactDOM.render(
    <Table className="table" data={data} itemsPerPage={3} />,
    document.getElementById('root')
);