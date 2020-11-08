/*
 * Copyright 2020 José Expósito <jose.exposito89@gmail.com>
 *
 * This file is part of Touchégg-GUI.
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation,  either version 3 of the License,  or (at your option)  any later
 * version.
 *
 * This program is distributed in the hope that it will be useful,  but  WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the  GNU General Public License along with
 * this program. If not, see <http://www.gnu.org/licenses/>.
 */
import RowItem from './row-item';

const { Gtk } = imports.gi;

class GestureListRow extends Gtk.ListBoxRow {
  constructor({
    id,
    gestureType,
    gestureDirection,
    numberOfFingers,
    actionType,
    actionSettings,
    appName,
  }) {
    super();
    this.id = id;
    this.gestureType = gestureType;
    this.gestureDirection = gestureDirection;
    this.numberOfFingers = numberOfFingers;
    this.actionType = actionType;
    this.actionSettings = actionSettings;
    this.appName = appName;

    this.box = new Gtk.HBox();
    this.box.add(new RowItem(RowItem.TYPE.GESTURE_TYPE, this.gestureType));
    this.box.add(new RowItem(RowItem.TYPE.PLUS));
    this.box.add(new RowItem(RowItem.TYPE.NUMBER_OF_FINGERS, this.numberOfFingers));
    this.box.add(new RowItem(RowItem.TYPE.PLUS));
    this.box.add(new RowItem(RowItem.TYPE.GESTURE_DIRECTION, this.gestureDirection));
    this.box.add(new RowItem(RowItem.TYPE.EQUAL));
    this.box.add(new RowItem(RowItem.TYPE.ACTION_TYPE, this.actionType));
    this.box.show_all();
    this.add(this.box);
  }
}

export default GestureListRow;