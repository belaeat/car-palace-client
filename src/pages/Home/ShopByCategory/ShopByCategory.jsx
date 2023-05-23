import { useEffect, useState } from "react";
import CarCategory from "../CarCategory/CarCategory";
import { Tab, TabList, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const ShopByCategory = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div>
            <div>
                <Tabs>
                    <TabList>
                        <div>
                            <Tab>Classic Car</Tab>
                            <Tab>Modern Car</Tab>
                            <Tab>Construction Car</Tab>
                        </div>
                    </TabList>
                </Tabs>
            </div>
            <div>
                {
                    categories.map(category => <CarCategory
                        key={category.id}
                        categories={category}
                    ></CarCategory>)
                }
            </div>
        </div>
    );
};

export default ShopByCategory;