import reactlogo from "../assets/react.svg"

export default function Section(props){


    let reactlogoAlt = "React Logo"

    return(
        <>
        <section>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil error libero ipsam tempora atque excepturi laudantium. Error pariatur porro mollitia, quod magni, reprehenderit laboriosam nobis nostrum soluta qui repudiandae odit!</p>
            <p>Illum id quidem ut earum fugiat, animi eius voluptate aliquam nobis minima aspernatur, aut modi dignissimos quisquam? Culpa, possimus sequi sunt, soluta architecto doloremque rem obcaecati quaerat fugit enim perferendis.</p>
            <p>Aut itaque quo vel debitis aspernatur, sint numquam officia totam pariatur ducimus laboriosam sequi, id, enim placeat at suscipit. Dolore dolorum fuga sit hic culpa quaerat rem. Magni, neque quidem.</p>
            <img src={reactlogo} alt={reactlogoAlt} />
            <img src={props.viteLogoProps} alt={props.viteLogoAltProps} />
          </div>
        </section>

        </>
    )
}