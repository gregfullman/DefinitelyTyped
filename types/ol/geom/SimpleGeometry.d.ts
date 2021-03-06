import { Coordinate } from '../coordinate';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import { ObjectEvent } from '../Object';
import { TransformFunction } from '../proj';
import { Transform } from '../transform';
import Geometry from './Geometry';
import GeometryLayout from './GeometryLayout';
import GeometryType from './GeometryType';

export default abstract class SimpleGeometry extends Geometry {
    constructor();
    protected flatCoordinates: number[];
    protected layout: GeometryLayout;
    protected stride: number;
    protected computeExtent(extent: Extent): Extent;
    protected getSimplifiedGeometryInternal(squaredTolerance: number): SimpleGeometry;
    protected setLayout(layout: GeometryLayout | undefined, coordinates: any[], nesting: number): void;
    applyTransform(transformFn: TransformFunction): void;
    abstract clone(): Geometry;
    abstract closestPointXY(x: number, y: number, closestPoint: Coordinate, minSquaredDistance: number): number;
    abstract getCoordinates(): any[];
    getFirstCoordinate(): Coordinate;
    getFlatCoordinates(): number[];
    getLastCoordinate(): Coordinate;
    getLayout(): GeometryLayout;
    getSimplifiedGeometry(squaredTolerance: number): Geometry;
    getStride(): number;
    abstract getType(): GeometryType;
    abstract intersectsExtent(extent: Extent): boolean;
    rotate(angle: number, anchor: Coordinate): void;
    scale(sx: number, opt_sy?: number, opt_anchor?: Coordinate): void;
    abstract setCoordinates(coordinates: any[], opt_layout?: GeometryLayout): void;
    setFlatCoordinates(layout: GeometryLayout, flatCoordinates: number[]): void;
    abstract simplifyTransformed(squaredTolerance: number, opt_transform?: TransformFunction): Geometry;
    translate(deltaX: number, deltaY: number): void;
    on(type: string | string[], listener: ListenerFunction): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
export function getStrideForLayout(layout: GeometryLayout): number;
export function transformGeom2D(simpleGeometry: SimpleGeometry, transform: Transform, opt_dest?: number[]): number[];
