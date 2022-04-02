import styles from "../../styles/---lotuspionAttributes/lotuspionEnglish.module.css";
import Link from "next/link";

export const ComponentStepsResponsive = (props) => {
  return (
    <div className={props.step_res}>
      <div className={props.step_absolute_className}>
        <img
          className={props.absolute_image_className}
          src={props.src_absolute}
          alt=''
        />
      </div>
      <div className={props.step_res_box}>
        <img className={styles.img} src={props.src} alt='' />
        <div className={props.step_container_res}>
          <div id={styles.halfclip}>
            <div
              className={props.step_halfcircle_res}
              id={styles.clipped}></div>
          </div>
          <div className={props.step_halfcircle_res} id={styles.fixed}></div>
        </div>
        <div className={props.circle_res}>{props.number_circle}</div>
      </div>
      <div className={props.step_res_text_box}>
        <p className={props.title_className}>{props.title}</p>
        <p>{props.para}</p>
      </div>
    </div>
  );
};
export const VerticalLineResponsive = (props) => {
  return (
    <div className={props.veritcal_res_box}>
      <div className={props.veritcal_line}></div>
    </div>
  );
};

export default function LotuspionEnglish() {
  return (
    <div className={styles.section_animation}>
      <header className={styles.head}>
        <h1>Work process</h1>
        <p>Turn your new and unique ideas into reality</p>
        <Link href='/lotuspion/lotuspion'>
          <a href='persian version'>
            <p style={{ marginTop: "25px" }}>
              Click{" "}
              <strong style={{ color: "red", margin: "5px" }}>here</strong> to
              see the persian version
            </p>
          </a>
        </Link>
      </header>

      <main className={styles.main}>
        {/* --------------- start step one */}
        <div className={styles.step_one}>
          <div className={styles.step_one_box}>
            <img className={styles.img} src='/images/web.png' alt='' />
          </div>
          <div className={styles.step_one_text_section}>
            <p className={styles.title}>problem definition session</p>
            <p>You are on the right track and that , s your answer.</p>
          </div>
          <div>
            <div className={styles.step_one_container}>
              <div id={styles.halfclip}>
                <div
                  className={styles.step_one_halfcircle}
                  id={styles.clipped}></div>
              </div>
              <div
                className={styles.step_one_halfcircle}
                id={styles.fixed}></div>
            </div>
            <div className={styles.circle_one}>1</div>
          </div>
        </div>
        {/* --------------- end step one */}

        {/* --------------- start step two */}
        <div className={styles.step_two}>
          <div className={styles.step_2_section_circle_position_to_show}>
            <div
              className={styles.step_2_section_circle_position_to_show_section}>
              <img className={styles.img} src='/images/web_2.png' alt='' />
            </div>
            <div
              className={
                styles.step_2_section_circle_position_to_show_text_box
              }>
              <p className={styles.title_2}>problem definition session</p>
              <p className={styles.step_two_para}>
                You are on the right track and that , s your answer.
              </p>
            </div>
          </div>
          <div className={styles.step_two_vertical_1}></div>
          <div className={styles.step_two_horizontal_1}></div>
          <div className={styles.step_2_section_circle}>
            <div className={styles.step_two_box}>
              <div className={styles.step_two_container}>
                <div id={styles.halfclip}>
                  <div
                    className={styles.step_two_halfcircle}
                    id={styles.clipped}></div>
                </div>
                <div
                  className={styles.step_two_halfcircle}
                  id={styles.fixed}></div>
              </div>
              <div className={styles.circle_two}>2</div>
              <img className={styles.img} src='/images/web_2.png' alt='' />
            </div>
          </div>
          <div className={styles.step_two_text_section}>
            <div className={styles.step_two_horizontal_2}></div>
          </div>
          <div className={styles.step_two_vertical_2}></div>
        </div>
        {/* --------------- end step two */}

        {/* --------------- start step three */}
        <div className={styles.step_three}>
          <div className={styles.step_three_text_section_to_pisition}>
            <img className={styles.img} src='/images/web_2.png' alt='' />
          </div>
          <div className={styles.step_three_text_section}>
            <p className={styles.title_3}>problem definition session</p>
            <p>You are on the right track and that , s your answer.</p>
          </div>
          <div className={styles.step_three_box}>
            <img className={styles.img} src='/images/web_2.png' alt='' />
            <div className={styles.step_three_container}>
              <div id={styles.halfclip}>
                <div
                  className={styles.step_three_halfcircle}
                  id={styles.clipped}></div>
              </div>
              <div
                className={styles.step_three_halfcircle}
                id={styles.fixed}></div>
            </div>
            <div className={styles.circle_three}>3</div>
          </div>
        </div>
        {/* --------------- end step three */}

        {/* --------------- start step four */}
        <div className={styles.step_four}>
          <div className={styles.step_four_to_position}>
            <div className={styles.step_four_to_position_section}>
              <img className={styles.img_1} src='/images/web_2.png' alt='' />
            </div>
            <div className={styles.step_four_text_section_opac}>
              <p className={styles.title_4}>problem definition session</p>
              <p className={styles.step_four_text_section_para}>
                You are on the right track and that , s your answer.
              </p>
            </div>
          </div>
          <div className={styles.step_four_vertical_1}></div>
          <div className={styles.step_four_horizontal_1}></div>
          <div className={styles.step_four_section_circle}>
            <div className={styles.step_four_box}>
              <img className={styles.img_1} src='/images/web_2.png' alt='' />
              <div className={styles.step_four_container}>
                <div id={styles.halfclip}>
                  <div
                    className={styles.step_four_halfcircle}
                    id={styles.clipped}></div>
                </div>
                <div
                  className={styles.step_four_halfcircle}
                  id={styles.fixed}></div>
              </div>
              <div className={styles.circle_four}>4</div>
            </div>
          </div>
          <div className={styles.step_four_text_section}>
            <div className={styles.step_four_horizontal_2}></div>
          </div>
          <div className={styles.step_four_vertical_2}></div>
        </div>
        {/* --------------- end step four */}

        {/* --------------- start step five */}
        <div className={styles.step_five}>
          <div className={styles.step_five_to_position}>
            <img className={styles.img} src='/images/web_2.png' alt='' />
          </div>
          <div className={styles.step_five_box}>
            <img className={styles.img} src='/images/web_2.png' alt='' />
            <div className={styles.step_five_container}>
              <div id={styles.halfclip}>
                <div
                  className={styles.step_five_halfcircle}
                  id={styles.clipped}></div>
              </div>
              <div
                className={styles.step_five_halfcircle}
                id={styles.fixed}></div>
            </div>
            <div className={styles.circle_five}>5</div>
          </div>
          <div className={styles.step_five_text_section_opac}>
            <p className={styles.title_5}>problem definition session</p>
            <p> You are on the right track and that , s your answer.</p>
          </div>
        </div>
        {/* --------------- end step five */}

        {/* --------------- start step six */}
        <div className={styles.step_six}>
          <div className={styles.step_six_to_position}>
            <div className={styles.step_six_to_position_section}>
              <img className={styles.img} src='/images/web_2.png' alt='' />
            </div>
            <div className={styles.step_six_text_para}>
              <p className={styles.title_6}>problem definition session</p>
              <p className={styles.step_six_para}>
                .You are on the right track and that , s your answer
              </p>
            </div>
          </div>
          <div className={styles.step_six_vertical_1}></div>
          <div className={styles.step_six_horizontal_1}></div>
          <div className={styles.step_six_section_circle}>
            <div className={styles.step_six_box}>
              <div className={styles.step_six_container}>
                <div id={styles.halfclip}>
                  <div
                    className={styles.step_six_halfcircle}
                    id={styles.clipped}></div>
                </div>
                <div
                  className={styles.step_six_halfcircle}
                  id={styles.fixed}></div>
              </div>
              <div className={styles.circle_six}>6</div>
              <img className={styles.img} src='/images/web_2.png' alt='' />
            </div>
          </div>
          <div className={styles.step_six_text_section}>
            <div className={styles.step_six_horizontal_2}></div>
          </div>
          <div className={styles.step_six_vertical_2}></div>
        </div>
        {/* --------------- end step six */}

        {/* --------------- start step seven */}
        <div className={styles.step_seven}>
          <div className={styles.step_seven_to_position}>
            <img className={styles.img} src='/images/web_2.png' alt='' />
          </div>
          <div className={styles.step_seven_text_section}>
            <p className={styles.title_7}>problem definition session</p>
            <p>.You are on the right track and that , s your answer</p>
          </div>
          <div className={styles.step_seven_box}>
            <img className={styles.img} src='/images/web_2.png' alt='' />
            <div className={styles.step_seven_container}>
              <div id={styles.halfclip}>
                <div
                  className={styles.step_seven_halfcircle}
                  id={styles.clipped}></div>
              </div>
              <div
                className={styles.step_seven_halfcircle}
                id={styles.fixed}></div>
            </div>
            <div className={styles.circle_seven}>7</div>
          </div>
        </div>
        {/* --------------- end step seven */}
      </main>

      <div className={styles.responsive_section}>
        <ComponentStepsResponsive
          t
          step_res={styles.step_one_res}
          step_res_box={styles.step_one_res_box}
          step_container_res={styles.step_one_container_res}
          step_halfcircle_res={styles.step_one_halfcircle_res}
          circle_res={styles.circle_one_res}
          step_res_text_box={styles.step_one_res_text_box}
          title_className={styles.title}
          src='/images/web.png'
          title='problem definition session'
          para='.You are on the right track and that , s your answer'
          number_circle='1'
        />
        <VerticalLineResponsive
          veritcal_res_box={styles.veritcal_res_box_one}
          veritcal_line={styles.veritcal_line_one}
        />
        <ComponentStepsResponsive
          step_res={styles.step_two_res}
          step_res_box={styles.step_two_res_box}
          step_container_res={styles.step_two_container_res}
          step_halfcircle_res={styles.step_two_halfcircle_res}
          circle_res={styles.circle_two_res}
          step_res_text_box={styles.step_two_res_text_box}
          title_className={styles.title_res_2}
          src='/images/web_2.png'
          title='problem definition session'
          para='.You are on the right track and that , s your answer'
          number_circle='2'
          src_absolute='/images/web_2.png'
          absolute_image_className={styles.img}
          step_absolute_className={styles.step_absolute_two}
        />
        <VerticalLineResponsive
          veritcal_res_box={styles.veritcal_res_box_two}
          veritcal_line={styles.veritcal_line_two}
        />
        <ComponentStepsResponsive
          step_res={styles.step_three_res}
          step_res_box={styles.step_three_res_box}
          step_container_res={styles.step_three_container_res}
          step_halfcircle_res={styles.step_three_halfcircle_res}
          circle_res={styles.circle_three_res}
          step_res_text_box={styles.step_three_res_text_box}
          title_className={styles.title_res_3}
          src='/images/web_2.png'
          title='problem definition session'
          para='.You are on the right track and that , s your answer'
          number_circle='3'
          src_absolute='/images/web_2.png'
          absolute_image_className={styles.img}
          step_absolute_className={styles.step_absolute_three}
        />
        <VerticalLineResponsive
          veritcal_res_box={styles.veritcal_res_box_three}
          veritcal_line={styles.veritcal_line_three}
        />
        <ComponentStepsResponsive
          step_res={styles.step_four_res}
          step_res_box={styles.step_four_res_box}
          step_container_res={styles.step_four_container_res}
          step_halfcircle_res={styles.step_four_halfcircle_res}
          circle_res={styles.circle_four_res}
          step_res_text_box={styles.step_four_res_text_box}
          title_className={styles.title_res_4}
          src='/images/web_2.png'
          title='problem definition session'
          para='.You are on the right track and that , s your answer'
          number_circle='4'
          src_absolute='/images/web_2.png'
          absolute_image_className={styles.img}
          step_absolute_className={styles.step_absolute_four}
        />
        <VerticalLineResponsive
          veritcal_res_box={styles.veritcal_res_box_four}
          veritcal_line={styles.veritcal_line_four}
        />
        <ComponentStepsResponsive
          step_res={styles.step_five_res}
          step_res_box={styles.step_five_res_box}
          step_container_res={styles.step_five_container_res}
          step_halfcircle_res={styles.step_five_halfcircle_res}
          circle_res={styles.circle_five_res}
          step_res_text_box={styles.step_five_res_text_box}
          title_className={styles.title_res_5}
          src='/images/web_2.png'
          title='problem definition session'
          para='.You are on the right track and that , s your answer'
          number_circle='5'
          src_absolute='/images/web_2.png'
          absolute_image_className={styles.img}
          step_absolute_className={styles.step_absolute_five}
        />
        <VerticalLineResponsive
          veritcal_res_box={styles.veritcal_res_box_five}
          veritcal_line={styles.veritcal_line_five}
        />
        <ComponentStepsResponsive
          step_res={styles.step_six_res}
          step_res_box={styles.step_six_res_box}
          step_container_res={styles.step_six_container_res}
          step_halfcircle_res={styles.step_six_halfcircle_res}
          circle_res={styles.circle_six_res}
          step_res_text_box={styles.step_six_res_text_box}
          title_className={styles.title_res_6}
          src='/images/web_2.png'
          title='problem definition session'
          para='.You are on the right track and that , s your answer'
          number_circle='6'
          src_absolute='/images/web_2.png'
          absolute_image_className={styles.img}
          step_absolute_className={styles.step_absolute_six}
        />
        <VerticalLineResponsive
          veritcal_res_box={styles.veritcal_res_box_six}
          veritcal_line={styles.veritcal_line_six}
        />
        <ComponentStepsResponsive
          step_res={styles.step_seven_res}
          step_res_box={styles.step_seven_res_box}
          step_container_res={styles.step_seven_container_res}
          step_halfcircle_res={styles.step_seven_halfcircle_res}
          circle_res={styles.circle_seven_res}
          step_res_text_box={styles.step_seven_res_text_box}
          title_className={styles.title_res_7}
          src='/images/web_2.png'
          title='problem definition session'
          para='.You are on the right track and that , s your answer'
          number_circle='7'
          src_absolute='/images/web_2.png'
          absolute_image_className={styles.img}
          step_absolute_className={styles.step_absolute_seven}
        />
      </div>
    </div>
  );
}
