import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { z } from "zod";
import { fetchDistricts, fetchStates } from "../../../../services/apis";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Select from "react-select";
import toast from "react-hot-toast";
import { supabase } from "../../../../App";
type Props = {};

const schema = z.object({
  name: z.string().min(2, "Full Name is required"),
  phone: z.string().min(1, "Phone Number is required"),
  class: z.string().min(2, "Class is required"),
  school: z.string().min(2, "School is required"),
  state: z.string().min(2, "State is required"),
  district: z.string().min(2, "District is required"),
  courses: z
    .array(z.string().min(2, "Course is required"))
    .min(1, "Please select atleast one course"),
  whatsapp: z.boolean(),
});

type FormData = z.infer<typeof schema>;

const classOptions = [
  { value: "10th", label: "10th Standard" },
  { value: "11th", label: "11th Standard" },
  { value: "12th", label: "12th Standard" },
];

export const Header = (_props: Props) => {
  const country = "in";
  const [states, setStates] = useState<StateType[]>([]);
  const [districts, setDistricts] = useState<CityType[]>([]);

  const getStates = async () => {
    const response = await fetchStates(country);
    setStates(response);
  };

  const getDistricts = async (countryCode: string, stateCode: string) => {
    if (countryCode && stateCode) {
      const response = await fetchDistricts((countryCode = country), stateCode);
      setDistricts(response);
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      whatsapp: true,
    },
    mode: "onBlur",
  });

  const state = watch("state");

  useEffect(() => {
    if (country) {
      setStates([]);
      setDistricts([]);
      getStates();
      setValue("state", "");
      setValue("district", "");
    }
  }, [country, setValue]);

  useEffect(() => {
    if (state) {
      setDistricts([]);
      getDistricts(country!, state);
      setValue("district", "");
    }
  }, [state, setValue]);

  const onSubmit = async (data: FormData) => {
    const { data: register, error } = await supabase
      .from("register-form")
      .insert([data])
      .select();
    if (error) {
      toast.error(error.message);
      throw error;
    } else {
      toast.success("Registered Successfully");
      return register;
    }
  };
  return (
    <div className={styles.HeaderWrapper}>
      <div className={styles.BackgroundText}>
        <h1>REGISTER NOW</h1>
      </div>
      <div className={styles.DetailWrapper}>
        <div className={styles.Content}>
          <div className={styles.TopInner}>
            <p>REGISTER NOW</p>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.forms}>
        <div className={styles.inputbox}>
          <div>
            <div>
              <label htmlFor="">
                Full Name<span>*</span>
              </label>
              <input
                type="text"
                {...register("name")}
                placeholder="Sam Walton"
              />
              {errors.name && (
                <p className={styles.error}>{errors.name.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="">
                Phone Number<span>*</span>
              </label>
              <input
                type="text"
                {...register("phone")}
                placeholder="8023456789"
              />
              {errors.phone && (
                <p className={styles.error}>{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div>
            {" "}
            <div>
              <label htmlFor="state">
                In which class are you studying?<span>*</span>
              </label>
              <Select
                isClearable
                options={classOptions}
                onChange={(option) => setValue("class", option?.value || "")}
                placeholder="Select a class"
                className={styles.select}
              />
              {errors.class && (
                <p className={styles.error}>{errors.class.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="">
                School Name<span>*</span>
              </label>
              <input
                type="text"
                {...register("school")}
                placeholder="St. Francis School, Palayoor, Chavakkad"
              />
              {errors.school && (
                <p className={styles.error}>{errors.school.message}</p>
              )}
            </div>
          </div>

          <div>
            {" "}
            <div>
              <label htmlFor="state">
                State<span>*</span>
              </label>
              <Select
                isClearable
                options={states.map((state) => ({
                  value: state.iso2,
                  label: state.name,
                }))}
                value={
                  states.find((s) => s.iso2 === state)
                    ? {
                        value: states.find((s) => s.iso2 === state)?.iso2,
                        label: states.find((s) => s.iso2 === state)?.name,
                      }
                    : null
                }
                onChange={(option) => setValue("state", option?.value || "")}
                placeholder="Select a state"
                className={styles.select}
              />
              {errors.state && (
                <p className={styles.error}>{errors.state.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="district">
                District<span>*</span>
              </label>
              <Select
                isClearable
                options={districts.map((district) => ({
                  value: district.name,
                  label: district.name,
                }))}
                value={
                  districts.find((d) => d.name === watch("district"))
                    ? {
                        value: districts.find(
                          (d) => d.name === watch("district")
                        )?.name,
                        label: districts.find(
                          (d) => d.name === watch("district")
                        )?.name,
                      }
                    : null
                }
                onChange={(option) => setValue("district", option?.value || "")}
                placeholder="Select a district"
                className={styles.select}
              />
              {errors.district && (
                <p className={styles.error}>{errors.district.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className={styles.checkbox}>
          <label htmlFor="">
            Please select the courses you are interested in<span>*</span>
          </label>
          <div>
            <div>
              <input type="checkbox" {...register("courses")} value="CLAT" />
              <span>CLAT (Common Law Admission Test)</span>
            </div>
            <div>
              <input type="checkbox" {...register("courses")} value="IPMAT" />
              <span>
                IPMAT (Integrated Program in Management Aptitude Test)
              </span>
            </div>
            <div>
              <input type="checkbox" {...register("courses")} value="NCET" />
              <span>NCET (National Common Entrance Test)</span>
            </div>
            <div>
              <input type="checkbox" {...register("courses")} value="CUET" />
              <span>CUET UG (Common University Entrance Test)</span>
            </div>
          </div>
          {errors.courses && (
            <p className={styles.error}>{errors.courses.message}</p>
          )}
        </div>
        <div className={styles.togglewrap}>
          <span>
            Do you agree to be added to a WhatsApp group for further
            communication?
          </span>
          <label className={styles.Toggle}>
            <input type="checkbox" {...register("whatsapp")} />
            <div className={styles.ToggleButton}></div>
          </label>
          {errors.whatsapp && (
            <p className={styles.error}>{errors.whatsapp.message}</p>
          )}
        </div>
        <div className={styles.btn}>
          <button type="reset">Clear Form</button>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};
