export declare class ValidationDto {
    readonly id: number;
    readonly groupId: number;
    readonly createdBy: number;
    readonly cloneId: number;
    readonly lotId: number | null;
    readonly conjugateId: number | null;
    readonly speciesId: number | null;
    readonly application: number;
    readonly positiveControl: string;
    readonly negativeControl: string;
    readonly incubationConditions: string;
    readonly concentration: string;
    readonly concentrationUnit: string;
    readonly tissue: string;
    readonly fixation: number;
    readonly fixationNotes: string;
    readonly notes: string;
    readonly status: number;
    readonly antigenRetrievalType: string;
    readonly antigenRetrievalTime: string;
    readonly antigenRetrievalTemperature: string;
    readonly saponin: boolean | null;
    readonly saponinConcentration: string | null;
    readonly methanolTreatment: boolean | null;
    readonly methanolTreatmentConcentration: string | null;
    readonly surfaceStaining: boolean | null;
    readonly surfaceStainingConcentration: string | null;
    readonly meta: object;
    readonly isArchived: boolean;
    readonly createdAt: string;
    readonly updatedAt: string;
}
export declare class CreateValidationDto {
    readonly createdBy?: number;
    readonly groupId: number;
    readonly cloneId: number;
    readonly lotId: number | null;
    readonly conjugateId: number | null;
    readonly speciesId: number | null;
    readonly application: number | null;
    readonly positiveControl: string | null;
    readonly negativeControl: string | null;
    readonly incubationConditions: string | null;
    readonly concentration: string | null;
    readonly concentrationUnit: string | null;
    readonly tissue: string | null;
    readonly fixation: number | null;
    readonly fixationNotes: string | null;
    readonly notes: string | null;
    readonly status: number;
    readonly antigenRetrievalType: string | null;
    readonly antigenRetrievalTime: string | null;
    readonly antigenRetrievalTemperature: string | null;
    readonly saponin: boolean | null;
    readonly saponinConcentration: string | null;
    readonly methanolTreatment: boolean | null;
    readonly methanolTreatmentConcentration: string | null;
    readonly surfaceStaining: boolean | null;
    readonly surfaceStainingConcentration: string | null;
}
export declare class UpdateValidationDto {
    readonly cloneId: number;
    readonly lotId: number | null;
    readonly conjugateId: number | null;
    readonly speciesId: number | null;
    readonly application: number | null;
    readonly positiveControl: string | null;
    readonly negativeControl: string | null;
    readonly incubationConditions: string | null;
    readonly concentration: string | null;
    readonly concentrationUnit: string | null;
    readonly tissue: string | null;
    readonly fixation: number | null;
    readonly fixationNotes: string | null;
    readonly notes: string | null;
    readonly status: number;
    readonly antigenRetrievalType: string | null;
    readonly antigenRetrievalTime: string | null;
    readonly antigenRetrievalTemperature: string | null;
    readonly saponin: boolean | null;
    readonly saponinConcentration: string | null;
    readonly methanolTreatment: boolean | null;
    readonly methanolTreatmentConcentration: string | null;
    readonly surfaceStaining: boolean | null;
    readonly surfaceStainingConcentration: string | null;
}
export declare class UploadValidationDto {
    readonly groupId: string;
}
//# sourceMappingURL=dto.d.ts.map