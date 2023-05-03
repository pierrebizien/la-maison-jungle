import {plantList} from "../datas/plantList";

const plantListToSell = [
	'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]

function ShoppingList()
{
	return (
	<ul>
		{plantListToSell.map((plant, i) => (<li key={`${plant}-${i}`}>{plant}</li>))}
	</ul>
	)
}
const categories  = plantList.filter((val, ind, arr) => arr.indexOf(val['category']) === ind);

console.log(categories);


function PlantCategories()
{
	return (
		<ul>
			{plantList.reduce(function (acc, cv) {
				if (!acc.includes(cv)){
					acc.push(cv);}
			})
		}
		</ul>
	)
}

export default ShoppingList