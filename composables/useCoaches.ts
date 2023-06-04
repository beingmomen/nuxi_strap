

export const useCoaches = () => {
  const { setAllData } = useCoachesStore();


  const image = ref(null);
  const name = ref(null);
  const headers = ref([
    {
      key: 'avatar',
      label: 'Image',
      sortable: false,
    },
    { key: 'name', label: 'Name', sortable: true },
    {
      key: 'actions',
      label: 'Actions'
    }
  ]);


  const create = async () => {
    const body = {
      name: name.value,
      image: image.value,
    };
    const { data, error } = await useFetch("/api/coaches", {
      method: "POST",
      body: body,
    });

    if (error.value) {
      return useToast(error.value.data?.statusMessage, "error");
    }

    useToast(data.value?.message);
    // await navigateTo("/coaches")


  }


  const updateOne = async (id: any) => {
    const body = {
      name: name.value,
      image: image.value,
    };

    const { data, error } = await useFetch(`/api/coaches/${id}`, {
      method: "POST",
      body: body,
    });

    if (error.value) {
      return useToast(error.value.data?.statusMessage, "error");
    }

    useToast(data.value?.message);
    await navigateTo("/coaches")


  }

  const getAll = async () => {
    const { data, error } = await useFetch("/api/coaches");

    if (error.value) {
      return useToast(error.value.data?.statusMessage, "error");
    }

    setAllData(data.value)
  }


  const showOne = async (id: any) => {
    const { data, error } = await useFetch(`/api/coaches/${id}`);

    if (error.value) {
      return useToast(error.value.data?.statusMessage, "error");
    }

    return data.value
  }


  const deleteOne = async (id: any) => {
    const { data, error } = await useFetch(`/api/coaches/${id}`, {
      method: 'POST',
    });

    if (error.value) {
      return useToast(error.value.data?.statusMessage, "error");
    }

    useToast(data.value?.message);
    getAll()

  }




  return { name, image, create, getAll, headers, deleteOne, showOne, updateOne }


}
