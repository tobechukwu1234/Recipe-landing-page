import food from './assets/image-omelette.jpeg'

function Recipe(){

  

  return(
    <>
      <div className="everything">
        
        <div className='start'>
          <img src={food} className='img'/>

          <div className='help'>
            <h1 className= 'font-bold'>Simple Omelette Recipe</h1>

            <p className='mb-8'>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
            to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>

          </div>

          

          <div className='preparation mb-8'>
            <h2 className='mb-2 pretime'>Preparation time</h2>
            <ul>

              <div className="flex">
                 <p className='pr-4 font-bold dot'>• </p>
                 <li className='pb-2'><span className='font-bold'>Total:</span> Approximately 10 minutes</li>
              </div>
              <div className="flex">
                 <p className='pr-4 font-bold dot'>• </p>
                 <li className='pb-2'><span className='font-bold'>Preparation:</span> 5 minutes</li>
              </div>
              <div className="flex">
                 <p className='pr-4 font-bold dot'>• </p>
                 <li className='pb-2'><span className='font-bold'>Cooking:</span> 5 minutes</li>
              </div>
                                         
            </ul>
          </div>

          <div className='ingre mb-8'>
            <h1>Ingredients</h1>
            <ul>
                <div className='flex'>
                  <p className='pr-4 font-bold number'>• </p>
                  <li className='pb-2'>2-3 large eggs</li>
                </div>
                <div className='flex'>
                  <p className='pr-4 font-bold number'>• </p>
                  <li className='pb-2'>Salt, to taste</li>
                </div>
                <div className='flex'>
                  <p className='pr-4 font-bold number'>• </p>
                  <li className='pb-2'>Pepper, to taste</li>
                </div>
                <div className='flex'>
                  <p className='pr-4 font-bold number'>• </p>
                  <li className='pb-2'>1 tablespoon of butter or oil</li>
                </div>
                <div className='flex'>
                  <p className='pr-4 font-bold number'>• </p>
                  <li className='pb-2'>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
                </div>
                                
                          
            </ul>
          </div>
          <hr className='mb-8'/>

          <div className='instruct mb-8'>
            <h1>Instructions</h1>
            <ul>
              <div className='flex'>
                <p className='pr-4 font-bold number'>1. </p>
                <li className='pb-2'><span className='font-bold'>Beat the eggs: </span>In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
                You can add a tablespoon of water or milk for a fluffier texture.</li>
              </div>
                
              <div className='flex'>
                <p className='pr-4 font-bold number'>2. </p>
                <li className='pb-2'><span className='font-bold'>Heat the pan: </span>Place a non-stick frying pan over medium heat and add butter or oil.</li>
              </div >
                

              <div className='flex'>
                 <p className='pr-4 font-bold number'>3. </p>
                 <li className='pb-2'><span className='font-bold'>Cook the omelette: </span>Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
                 the eggs evenly coat the surface.</li>
              </div>

                
              <div className='flex'>
                <p className='pr-4 font-bold number'>4. </p>
                <li className='pb-2'><span className='font-bold'>Add fillings (optional): </span>When the eggs begin to set at the edges but are still slightly runny in the 
                middle, sprinkle your chosen fillings over one half of the omelette.</li>

              </div>

              <div className='flex'>
                <p className='pr-4 font-bold number'>5. </p>
                <li className='pb-2'><span className='font-bold'>Fold and serve: </span>As the omelette continues to cook, carefully lift one edge and fold it over the 
                fillings. Let it cook for another minute, then slide it onto a plate.</li>
              </div>

              <div className='flex'>
                <p className='pr-4 font-bold number'>6. </p>
                <li className='pb-2'><span className='font-bold'>Enjoy: </span>Serve hot, with additional salt and pepper if needed.</li>
              </div>

                                      
            </ul>
             
          </div>
          <hr className='mb-8'/>

          <div className='nutri '>
            <h1>Nutrition</h1>
            <p className='mb-3'>The table below shows nutritional values per serving without the additional fillings.</p>

            <table>
              <tr>
               <td><span className='pr-3'></span>Calories</td>        
               <td className='amount'>277kcal</td>
               <td><span className='just'></span></td>
              </tr>
              
              <tr>
               <td><span className='pr-3'></span>Carbs</td>               
               <td className='amount'>0g</td>
               <td><span className='just'></span></td>
              </tr>
              
              <tr>
               <td><span className='pr-3'></span>Protein</td>               
               <td className='amount'>20g</td>
               <td><span className='just'></span></td>
              </tr>
              
              <tr className='border-0'>
               <td><span className='pr-3'></span>Fat</td>               
               <td className='amount'>22g</td>
               <td><span className='just'></span></td>
              </tr>
            </table>
          </div>


        </div>
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Tobechukwu Samuel Omeje</a>.
        </div>
        
      </div>
    </>
  )
}

export default Recipe

