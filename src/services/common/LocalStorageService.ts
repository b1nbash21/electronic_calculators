//Sidenote: all functions must not contain "localStorage" bc class is names like this

export interface ILocalStorageService{
	getData: (storageName: string) => any;
	storeOrReplaceData: (storageName: string, data: any) => void;
	clearlocalStorage: () => void;
	getAllKeys: () => string[];
	removeWithStorageName: (storageName: string) => void;
}

class LocalStorageService implements ILocalStorageService {
    public getData = (storageName: string) => {
		const sotrageData = localStorage.getItem(storageName);
		const data = JSON.parse(sotrageData!);
	
		return data;
	};
	
	public storeOrReplaceData = (storageName: string, data: any) => {
		const dataExists = this.getData(storageName)
		if(dataExists)
			this.removeWithStorageName(storageName)

		localStorage.setItem(storageName, JSON.stringify(data));
	};

	public removeWithStorageName = (storageName: string) => {
		localStorage.removeItem(storageName);
	}

	public getAllKeys = () => {
		return Object.keys(localStorage);
	}

	public clearlocalStorage = () => {
		localStorage.clear();
	};
}

export { LocalStorageService };