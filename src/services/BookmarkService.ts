import { ILocalStorageService, LocalStorageService } from "./common/LocalStorageService";

export interface IBookmarkServices {
	AddBookmark: (id: string) => void;
	RemoveBookmark: (id: string) => void;
	GetBookmarks: () => string[];
}

class BookmarkServices implements IBookmarkServices {
	localStorageService: ILocalStorageService;
	bookmarkStorageName: string;
	
	constructor() {
		this.localStorageService = new LocalStorageService;
		this.bookmarkStorageName = "bms";
	}

	public AddBookmark = (id: string) => {
		let currentBookmarks: string[] = this.localStorageService.getData(this.bookmarkStorageName);
		if(currentBookmarks === null || currentBookmarks === undefined) {
			currentBookmarks = [id];
		} else {
			currentBookmarks.push(id);
		}

		this.localStorageService.storeOrReplaceData(this.bookmarkStorageName, currentBookmarks);
	}

	public RemoveBookmark = (id: string) => {
		let newBookmarks: string[] = [];
		let currentBookmarks: string[] = this.localStorageService.getData(this.bookmarkStorageName);
		if(currentBookmarks !== null || currentBookmarks !== undefined) {
			newBookmarks = currentBookmarks.filter(bookmarkId  => bookmarkId !== id);
		}
		
		this.localStorageService.storeOrReplaceData(this.bookmarkStorageName, newBookmarks);	
	}

	public GetBookmarks = (): string[] => {
		return this.localStorageService.getData(this.bookmarkStorageName);		
	}
}


export { BookmarkServices };