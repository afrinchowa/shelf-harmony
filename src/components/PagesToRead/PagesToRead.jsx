import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
    {
      name: "The Hitchhikers ",
      totalPages: 192,
    },
    {
      name: "Pride ",
      totalPages: 224,
    },
    {
      name: "To Kill",
      totalPages: 324,
    },
    {
      name: "The Lord ",
      totalPages: 1136,
    },
    {
      name: "Frankenstein",
      totalPages: 211,
    },
    {
      name: "One Hundred ",
      totalPages: 487,
    },
];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const PagesToRead = () => {
    return (
        <div className=' w-96 h-60 md:w-[73rem] md:h-[38rem] bg-[#13131308] mt-10 mx-auto mb-10'>
            <BarChart
                width={1000}
                height={600}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default PagesToRead;
